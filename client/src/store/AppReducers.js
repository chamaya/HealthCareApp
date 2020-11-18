import { combineReducers } from "redux";
import  userReducer  from '../components/User/Reducers/userreducer.js';
import  medicalCardReducer  from '../components/MedicalCard/Reducers/medicalcardreducer.js';
import  governmentIdReducer  from '../components/GovernmentID/Reducers/governmentidreducer.js';
import { reducer as formReducer } from 'redux-form'

const appReducers = {
    user: userReducer,
    medicalCard: medicalCardReducer,
    governmentId: governmentIdReducer,
    form: formReducer 
};

const appReducer = combineReducers(appReducers);

export default appReducer;