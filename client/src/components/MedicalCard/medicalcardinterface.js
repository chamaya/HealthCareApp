import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import MedicalCardContainer from "./Containers/medicalcardcontainer";
import AddMedicalCardContainer from "./Containers/addmedicalcardcontainer";
import UpdateMedicalCardContainer from "./Containers/updatemedicalcardcontainer";
import { userUpdatingMedicalCard, setMedicalCard } from "./Actions/medicalcardactions"

class MedicalCardInterface extends Component {

    static propTypes = {
      medicalCardBeingUpdatedByUser: PropTypes.bool.isRequired,
      userId: PropTypes.number.isRequired,
      isSettingMedicalCard: PropTypes.bool.isRequired,
      medicalCard: PropTypes.object,
      setMedicalCard: PropTypes.func,
      setMedicalCardError: PropTypes.object,
    }
    
    componentDidMount(){
      const{medicalCard, userId, setMedicalCard, setMedicalCardError, isSettingMedicalCard} = this.props;
      if((!medicalCard && !setMedicalCardError && !isSettingMedicalCard) || (medicalCard && medicalCard.user !== userId) ){
        setMedicalCard(userId);
      }
    }

    render(){
        const { medicalCard, medicalCardBeingUpdatedByUser, isSettingMedicalCard } = this.props;
        if(isSettingMedicalCard){
          return(<div>...Setting Medical Card</div>)
        }
        else{
          if(medicalCard){
            if(medicalCardBeingUpdatedByUser){
              return(
                <UpdateMedicalCardContainer></UpdateMedicalCardContainer>
              );
            }
            else{
              return(
                <MedicalCardContainer></MedicalCardContainer>
              )
            }
          }
          return (
              <div>
                  <AddMedicalCardContainer></AddMedicalCardContainer>
              </div>
          );
      }
    }
}

const mapStateToProps = (state) => ({
    medicalCard: state.medicalCard.medicalCard,
    medicalCardBeingUpdatedByUser: state.medicalCard.medicalCardBeingUpdatedByUser,
    setMedicalCardError: state.medicalCard.setMedicalCardError,
    isSettingMedicalCard: state.medicalCard.isSettingMedicalCard,
});

const mapDispatchToProps = (dispatch) => ({
  userUpdatingMedicalCard: () => dispatch(userUpdatingMedicalCard()),
  setMedicalCard: (userId) => dispatch(setMedicalCard(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicalCardInterface);
