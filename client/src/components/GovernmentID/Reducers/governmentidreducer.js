
import {SET_GOVERNMENT_ID_BEGIN, SET_GOVERNMENT_ID_SUCCESS, SET_GOVERNMENT_ID_FAILURE, 
  ADD_GOVERNMENT_ID_BEGIN, ADD_GOVERNMENT_ID_SUCCESS, ADD_GOVERNMENT_ID_FAILURE,
  UPDATE_GOVERNMENT_ID_SUCCESS, UPDATE_GOVERNMENT_ID_BEGIN, UPDATE_GOVERNMENT_ID_FAILURE, UPDATE_GOVERNMENT_ID_BY_USER, CANCEL_UPDATE_GOVERNMENT_ID,
  DELETE_GOVERNMENT_ID_SUCCESS, DELETE_GOVERNMENT_ID_BEGIN, DELETE_GOVERNMENT_ID_FAILURE,
} from "../Actions/governmentidactions";

const initialState = {
  governmentId: null,
  isSettingGovernmentId: false,
  setGovernmentIdError: null,
  isAddingGovernmentId: false,
  addingGovernmentIdFailure: null,
  isUpdatingGovernmentId: false,
  governmentIdBeingUpdatedByUser: false,
  isDeletingGovernmentId: false,
  deleteGovernmentIdError: null,
}
export default function governmentIdReducer(state = initialState, action){
  switch(action.type){
    case SET_GOVERNMENT_ID_BEGIN:
      return {
        ...state,
        isSettingGovernmentId: true
      }
    case SET_GOVERNMENT_ID_SUCCESS:
      return {
        ...state,
        isSettingGovernmentId: false,
        governmentId: action.governmentId,
        setGovernmentIdError: null,
      }
    case SET_GOVERNMENT_ID_FAILURE:
      return {
        ...state,
        isSettingGovernmentId: false,
        setGovernmentIdError: action.error
      }  
    case ADD_GOVERNMENT_ID_BEGIN:
      return {
        ...state,
        isAddingGovernmentId: true
      }
    case ADD_GOVERNMENT_ID_SUCCESS:
      return {
        ...state,
        governmentId: action.governmentId,
        isAddingGovernmentId: false,
        addGovernmentIdError: null,
      }
    case ADD_GOVERNMENT_ID_FAILURE:
      return {
        ...state,
        isAddingGovernmentId: false,
        addGovernmentIdError: action.error
      }
      case UPDATE_GOVERNMENT_ID_BEGIN:
      return {
        ...state,
        isUpdatingGovernmentId: true
      }
    case UPDATE_GOVERNMENT_ID_SUCCESS:
      return {
        ...state,
        governmentId: action.governmentId,
        isUpdatingGovernmentId: false,
        addGovernmentIdError: null,
        governmentIdBeingUpdatedByUser: false
      }
    case UPDATE_GOVERNMENT_ID_FAILURE:
      return {
        ...state,
        isUpdatingGovernmentId: false,
        addGovernmentIdError: action.error
      }
    case UPDATE_GOVERNMENT_ID_BY_USER:
      return {
        ...state,
        governmentIdBeingUpdatedByUser: true,
      }
    case CANCEL_UPDATE_GOVERNMENT_ID:
      return {
        ...state,
        governmentIdBeingUpdatedByUser: false,
      }
    case DELETE_GOVERNMENT_ID_BEGIN:
      return {
        ...state,
        isDeletingGovernmentId: true
      }
    case DELETE_GOVERNMENT_ID_SUCCESS:
      return {
        ...state,
        isDeletingGovernmentId: false,
        deleteGovernmentIdError: null,
        governmentId: null,
      }
    case DELETE_GOVERNMENT_ID_FAILURE:
      return {
        ...state,
        isDeletingGovernmentId: false,
        deleteGovernmentIdError: action.error
      }
    default:
      return state;
  }
}