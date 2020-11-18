import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import RequestUserByIDForm from '../Presentational/requestuserbyidform.js'
import { setUser } from '../Actions/useractions';
import { withRouter } from 'react-router-dom';

class RequestUserByIdContainer extends Component {

    static propTypes = {
        setUser: PropTypes.func.isRequired,
        isSettingUser: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired,
    }

    render(){
        const { isSettingUser, setUser, history } = this.props;
        return (
            <div>
                <h2>Get a User by Their ID</h2>
                <RequestUserByIDForm onSubmit = { (values) => setUser(values.id, history) } isSetting={ isSettingUser }></RequestUserByIDForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSettingUser: state.user.isSettingUser
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (userId, history) => dispatch(setUser(userId, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RequestUserByIdContainer));
