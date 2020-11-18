import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import MedicalCardInfoForm from '../Presentational/medicalcardinfoform.js'
import { addMedicalCard } from '../Actions/medicalcardactions'

class AddMedicalCardContainer extends Component {

    static propTypes = {
        addMedicalCard: PropTypes.func.isRequired,
        isAddingMedicalCard: PropTypes.bool.isRequired,
        userId: PropTypes.number.isRequired,
    }
    render(){
        const { isAddingMedicalCard, addMedicalCard, userId } = this.props;
        const additions = {
            imagePath: `images/User_${userId}/medical_card/card.jpg`,
            user: userId
        };
        return (
            <div>
                <h2>Add a MedicalCard</h2>
                <MedicalCardInfoForm onSubmit = { (medicalCard) => addMedicalCard({ ...medicalCard, ...additions}) } isSubmitting={ isAddingMedicalCard }></MedicalCardInfoForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAddingMedicalCard: state.medicalCard.isAddingMedicalCard,
    userId: state.user.user.id
});

const mapDispatchToProps = (dispatch) => ({
  addMedicalCard: (medicalCard) => dispatch(addMedicalCard(medicalCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMedicalCardContainer);
