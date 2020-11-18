import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import GovernmentIdInfoForm from '../Presentational/governmentidinfoform.js'
import { addGovernmentId } from '../Actions/governmentidactions'

class AddGovernmentIdContainer extends Component {

    static propTypes = {
        addGovernmentId: PropTypes.func.isRequired,
        isAddingGovernmentId: PropTypes.bool.isRequired,
        userId: PropTypes.number.isRequired,
    }
    render(){
        const { isAddingGovernmentId, addGovernmentId, userId } = this.props;
        const additions = {
            imagePath: `images/User_${userId}/government_id/card.jpg`,
            user: userId
        };
        return (
            <GovernmentIdInfoForm onSubmit = { (governmentId) => addGovernmentId({ ...governmentId, ...additions}) } isSubmitting={ isAddingGovernmentId }></GovernmentIdInfoForm>
        );
    }
}

const mapStateToProps = (state) => ({
    isAddingGovernmentId: state.governmentId.isAddingGovernmentId,
    userId: state.user.user.id
});

const mapDispatchToProps = (dispatch) => ({
  addGovernmentId: (governmentId) => dispatch(addGovernmentId(governmentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGovernmentIdContainer);
