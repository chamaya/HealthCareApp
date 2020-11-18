import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import AddUserInfoForm from '../Presentational/adduserform.js'
import { addUser } from '../Actions/useractions'

class AddUserContainer extends Component {

    static propTypes = {
        addUser: PropTypes.func.isRequired,
        isAddingUser: PropTypes.bool.isRequired,
    }
    render(){
        const { isAddingUser, addUser } = this.props;
        return (
            <div>
                <h2>Add a User</h2>
                <AddUserInfoForm onSubmit = { (user) => addUser(user) } isAdding={ isAddingUser }></AddUserInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAddingUser: state.user.isAddingUser
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (userId) => dispatch(addUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
