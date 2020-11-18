
import {SET_MEDICAL_CARD_BEGIN, SET_MEDICAL_CARD_SUCCESS, SET_MEDICAL_CARD_FAILURE, 
  ADD_MEDICAL_CARD_BEGIN, ADD_MEDICAL_CARD_SUCCESS, ADD_MEDICAL_CARD_FAILURE,
  UPDATE_MEDICAL_CARD_SUCCESS, UPDATE_MEDICAL_CARD_BEGIN, UPDATE_MEDICAL_CARD_FAILURE, UPDATE_MEDICAL_CARD_BY_USER,
  DELETE_MEDICAL_CARD_SUCCESS, DELETE_MEDICAL_CARD_BEGIN, DELETE_MEDICAL_CARD_FAILURE,
} from "../Actions/medicalcardactions";

const initialState = {
  medicalCard: null,
  isSettingMedicalCard: false,
  setMedicalCardError: null,
  isAddingMedicalCard: false,
  addingMedicalCardFailure: null,
  isUpdatingMedicalCard: false,
  cardBeingUpdatedByUser: false,
  isDeletingMedicalCard: false,
  deleteMedicalCardError: null,
}
export default function medicalCardReducer(state = initialState, action){
  switch(action.type){
    case SET_MEDICAL_CARD_BEGIN:
      return {
        ...state,
        isSettingMedicalCard: true
      }
    case SET_MEDICAL_CARD_SUCCESS:
      return {
        ...state,
        isSettingMedicalCard: false,
        medicalCard: action.medicalCard,
        setMedicalCardError: null,
      }
    case SET_MEDICAL_CARD_FAILURE:
      return {
        ...state,
        isSettingMedicalCard: false,
        setMedicalCardError: action.error
      }  
    case ADD_MEDICAL_CARD_BEGIN:
      return {
        ...state,
        isAddingMedicalCard: true
      }
    case ADD_MEDICAL_CARD_SUCCESS:
      return {
        ...state,
        medicalCard: action.medicalCard,
        isAddingMedicalCard: false,
        addMedicalCardError: null,
      }
    case ADD_MEDICAL_CARD_FAILURE:
      return {
        ...state,
        isAddingMedicalCard: false,
        addMedicalCardError: action.error
      }
      case UPDATE_MEDICAL_CARD_BEGIN:
      return {
        ...state,
        isUpdatingMedicalCard: true
      }
    case UPDATE_MEDICAL_CARD_SUCCESS:
      return {
        ...state,
        medicalCard: action.medicalCard,
        isUpdatingMedicalCard: false,
        addMedicalCardError: null,
        cardBeingUpdatedByUser: false
      }
    case UPDATE_MEDICAL_CARD_FAILURE:
      return {
        ...state,
        isUpdatingMedicalCard: false,
        addMedicalCardError: action.error
      }
    case UPDATE_MEDICAL_CARD_BY_USER:
      return {
        ...state,
        cardBeingUpdatedByUser: true,
      }
    case DELETE_MEDICAL_CARD_BEGIN:
      return {
        ...state,
        isDeletingMedicalCard: true
      }
    case DELETE_MEDICAL_CARD_SUCCESS:
      return {
        ...state,
        isDeletingMedicalCard: false,
        deleteMedicalCardError: null,
        medicalCard: null,
      }
    case DELETE_MEDICAL_CARD_FAILURE:
      return {
        ...state,
        isDeletingMedicalCard: false,
        deleteMedicalCardError: action.error
      }
    default:
      return state;
  }
}