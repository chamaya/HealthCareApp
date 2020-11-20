import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import GovernmentIdInfoForm from '../Presentational/governmentidinfoform.js'
import { updateGovernmentId, userCancelUpdatingGovernmentId } from '../Actions/governmentidactions'

class UpdateGovernmentIdContainer extends Component {

    static propTypes = {
        updateGovernmentId: PropTypes.func.isRequired,
        cancelUpdate: PropTypes.func.isRequired,
        isUpdatingGovernmentId: PropTypes.bool.isRequired,
        userId: PropTypes.number.isRequired,
        governmentIdNumber: PropTypes.number.isRequired,
    }

    render(){
        const { isUpdatingGovernmentId, updateGovernmentId, cancelUpdate, userId, governmentIdNumber } = this.props;
        const additions = {
            imagePath: `images/User_${userId}/government_id/card.jpg`,
            user: userId,
            id: governmentIdNumber,
        };
        return (
            <div>
                <h2>Update Government ID</h2>
                <GovernmentIdInfoForm onSubmit = { (governmentId) => updateGovernmentId({ ...governmentId, ...additions}) } onCancel={() => cancelUpdate()} isSubmitting={ isUpdatingGovernmentId }></GovernmentIdInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isUpdatingGovernmentId: state.governmentId.isUpdatingGovernmentId,
    governmentIdNumber: state.governmentId.governmentId.id,
    userId: state.user.user.id
});

const mapDispatchToProps = (dispatch) => ({
  updateGovernmentId: (governmentId) => dispatch(updateGovernmentId(governmentId)),
  cancelUpdate: () => dispatch(userCancelUpdatingGovernmentId())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGovernmentIdContainer);
