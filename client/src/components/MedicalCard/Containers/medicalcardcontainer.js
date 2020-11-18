import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import MedicalCard from '../Presentational/medicalcard.js';
import { userUpdatingMedicalCard, deleteMedicalCard } from "../Actions/medicalcardactions";


class MedicalCardContainer extends Component {

    static propTypes = {
        deleteMedicalCard: PropTypes.func.isRequired,
        userUpdatingMedicalCard: PropTypes.func.isRequired,
        isDeletingMedicalCard: PropTypes.bool.isRequired,
        medicalCard: PropTypes.object.isRequired,

    }

    render(){
      const { medicalCard, deleteMedicalCard, isDeletingMedicalCard, userUpdatingMedicalCard } = this.props;
      if (isDeletingMedicalCard) {
          return <div>Deleting...</div>;
      }
      const { recId, issuer, state, expirationDate } = medicalCard;
      return(
        <MedicalCard 
        recId={ recId } issuer={ issuer } state={ state } expirationDate={ expirationDate }
        onUpdate={ userUpdatingMedicalCard } onDelete={()=>{ deleteMedicalCard(medicalCard.id) }}></MedicalCard>
      )
    }
}

const mapStateToProps = (state) => ({
    medicalCard: state.medicalCard.medicalCard,
    isDeletingMedicalCard: state.medicalCard.isDeletingMedicalCard,
});

const mapDispatchToProps = (dispatch) => ({
  userUpdatingMedicalCard: () => dispatch( userUpdatingMedicalCard() ),
  deleteMedicalCard: (id) => dispatch( deleteMedicalCard(id) ),
});


export default connect(mapStateToProps, mapDispatchToProps)(MedicalCardContainer);
