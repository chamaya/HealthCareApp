
import {SET_USER_BEGIN, SET_USER_SUCCESS, SET_USER_FAILURE, 
  ADD_USER_BEGIN, ADD_USER_SUCCESS, ADD_USER_FAILURE} from "../Actions/useractions";

const initialState = {
  user: null,
  isSettingUser: false,
  setUserError: null,
  isAddingUser: false,
  addUserError: null,
}
export default function userReducer(state = initialState, action){
  switch(action.type){
    case SET_USER_BEGIN:
      return {
        ...state,
        isSettingUser: true
      }
    case SET_USER_SUCCESS:
      return {
        ...state,
        isSettingUser: false,
        user: action.user,
        setUserError: null,
      }
    case SET_USER_FAILURE:
      return {
        ...state,
        isSettingUser: false,
        setUserError: action.error
      }  
    case ADD_USER_BEGIN:
      return {
        ...state,
        isAddingUser: true
      }
    case ADD_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAddingUser: false,
        addUserError: null,
      }
    case ADD_USER_FAILURE:
      return {
        ...state,
        isAddingUser: false,
        addUserError: action.error
      }
    default:
      return state;
  }
}