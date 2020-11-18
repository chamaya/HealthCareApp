import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import RequestUserByIDForm from '../Presentational/requestuserbyidform.js'
import { setUser } from '../Actions/useractions'

class RequestUserByIdContainer extends Component {

    static propTypes = {
        setUser: PropTypes.func.isRequired,
        isSettingUser: PropTypes.bool.isRequired,
    }

    render(){
        const { isSettingUser, setUser } = this.props;
        return (
            <div>
                <h2>Get a User by Their ID</h2>
                <RequestUserByIDForm onSubmit = { (values) => setUser(values.id) } isSetting={ isSettingUser }></RequestUserByIDForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSettingUser: state.user.isSettingUser
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (userId) => dispatch(setUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestUserByIdContainer);
