import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import AddUserInfoForm from '../Presentational/adduserform.js'
import { addUser } from '../Actions/useractions'
import { withRouter } from 'react-router-dom';

class AddUserContainer extends Component {

    static propTypes = {
        addUser: PropTypes.func.isRequired,
        isAddingUser: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired,
    }
    render(){
        const { isAddingUser, addUser, history } = this.props;
        return (
            <div>
                <h2>Add a User</h2>
                <AddUserInfoForm onSubmit = { (user) => addUser(user, history) } isAdding={ isAddingUser }></AddUserInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAddingUser: state.user.isAddingUser
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (userId, history) => dispatch(addUser(userId, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddUserContainer));
