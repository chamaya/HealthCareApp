import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import MedicalCardInfoForm from '../Presentational/medicalcardinfoform.js'
import { updateMedicalCard } from '../Actions/medicalcardactions'

class UpdateMedicalCardContainer extends Component {

    static propTypes = {
        updateMedicalCard: PropTypes.func.isRequired,
        isUpdatingMedicalCard: PropTypes.bool.isRequired,
        userId: PropTypes.number.isRequired,
        medicalCardId: PropTypes.number.isRequired,
    }

    render(){
        const { isUpdatingMedicalCard, updateMedicalCard, userId, medicalCardId } = this.props;
        const additions = {
            imagePath: `images/User_${userId}/medical_card/card.jpg`,
            user: userId,
            id: medicalCardId,
        };
        return (
            <div>
                <h2>Update Medical Card</h2>
                <MedicalCardInfoForm onSubmit = { (medicalCard) => updateMedicalCard({ ...medicalCard, ...additions}) } isSubmitting={ isUpdatingMedicalCard }></MedicalCardInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isUpdatingMedicalCard: state.medicalCard.isUpdatingMedicalCard,
    medicalCardId: state.medicalCard.medicalCard.id,
    userId: state.user.user.id
});

const mapDispatchToProps = (dispatch) => ({
  updateMedicalCard: (medicalCard) => dispatch(updateMedicalCard(medicalCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMedicalCardContainer);
