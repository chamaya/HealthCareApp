export const SET_MEDICAL_CARD_BEGIN = "SET_MEDICAL_CARD_BEGIN";
export const SET_MEDICAL_CARD_SUCCESS = "SET_MEDICAL_CARD_SUCCESS";
export const SET_MEDICAL_CARD_FAILURE = "SET_MEDICAL_CARD_FAILURE";
export const ADD_MEDICAL_CARD_BEGIN = "ADD_MEDICAL_CARD_BEGIN";
export const ADD_MEDICAL_CARD_SUCCESS = "ADD_MEDICAL_CARD_SUCCESS";
export const ADD_MEDICAL_CARD_FAILURE = "ADD_MEDICAL_CARD_FAILURE";
export const UPDATE_MEDICAL_CARD_SUCCESS = "UPDATE_MEDICAL_CARD_SUCCESS";
export const UPDATE_MEDICAL_CARD_BEGIN = "UPDATE_MEDICAL_CARD_BEGIN";
export const UPDATE_MEDICAL_CARD_FAILURE = "UPDATE_MEDICAL_CARD_FAILURE";
export const CANCEL_UPDATE_MEDICAL_CARD = "CANCEL_UPDATE_MEDICAL_CARD";
export const UPDATE_MEDICAL_CARD_BY_USER = "UPDATE_MEDICAL_CARD_BY_USER";
export const DELETE_MEDICAL_CARD_SUCCESS = "DELETE_MEDICAL_CARD_SUCCESS";
export const DELETE_MEDICAL_CARD_BEGIN = "DELETE_MEDICAL_CARD_BEGIN";
export const DELETE_MEDICAL_CARD_FAILURE = "DELETE_MEDICAL_CARD_FAILURE";

const request = require('request');
//Set MedicalCard set of API calls
export function setMedicalCard(userId){
  return async (dispatch) =>{
    dispatch(setMedicalCardBegin());
    var options = {
      'method': 'GET',
      'url': `http://localhost:5000/api/medicalcard/user/${userId}`,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error || !response || response.statusCode > 399) return dispatch(setMedicalCardFailure(error));
      const medicalCard = JSON.parse(response.body)[0];
      console.log('MedicalCard fetched...', medicalCard);
      return dispatch(setMedicalCardSuccess(medicalCard));
    });
  }
};
const setMedicalCardBegin = () => ({
    type: SET_MEDICAL_CARD_BEGIN
});
const setMedicalCardSuccess = medicalCard => ({
  type: SET_MEDICAL_CARD_SUCCESS, medicalCard
});
const setMedicalCardFailure = error => ({
  type: SET_MEDICAL_CARD_FAILURE, error
});

//Add  MedicalCard set of API calls
export function addMedicalCard(medicalCard){
  return async (dispatch) => {
    dispatch(addMedicalCardBegin());
    var options = {
      'method': 'POST',
      'url': 'http://localhost:5000/api/medicalcard/',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(medicalCard)
    };
    request(options, function (error, response) {
      if (error || !response || response.statusCode > 399) return dispatch(addMedicalCardFailure(error));
      const medicalCardResponse = JSON.parse(response.body);
      console.log("Added MedicalCard: ", medicalCardResponse);
      dispatch(addMedicalCardSuccess(medicalCardResponse));
    });
  }
}
const addMedicalCardBegin = ()=>({
    type : ADD_MEDICAL_CARD_BEGIN
});
const addMedicalCardSuccess = (medicalCard)=>({
    type:ADD_MEDICAL_CARD_SUCCESS, medicalCard
});
const addMedicalCardFailure = (error)=>({
    type:ADD_MEDICAL_CARD_FAILURE, error
});

//Update Medical Card Actions

export function updateMedicalCard(medicalCard){
  return async (dispatch) => {
    dispatch(updateMedicalCardBegin());
    var options = {
      'method': 'PUT',
      'url': 'http://localhost:5000/api/medicalcard/',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(medicalCard)
    };
    request(options, function (error, response) {
      if (error || !response || response.statusCode > 399) return dispatch(updateMedicalCardFailure(error));
      const medicalCardResponse = JSON.parse(response.body);
      console.log("Updated MedicalCard: ", medicalCardResponse);
      dispatch(updateMedicalCardSuccess(medicalCardResponse));
    });
  }
}
const updateMedicalCardBegin = ()=>({
    type : UPDATE_MEDICAL_CARD_BEGIN
});
const updateMedicalCardSuccess = (medicalCard)=>({
    type:UPDATE_MEDICAL_CARD_SUCCESS, medicalCard
});
const updateMedicalCardFailure = (error)=>({
    type:UPDATE_MEDICAL_CARD_FAILURE, error
});
export const userUpdatingMedicalCard = () =>({
  type:UPDATE_MEDICAL_CARD_BY_USER
});
export const userCancelUpdatingMedicalCard = () =>({
  type:CANCEL_UPDATE_MEDICAL_CARD
});

//Delete Medical Card Actions
export function deleteMedicalCard(medicalCardId){
  return async (dispatch) =>{
    dispatch(deleteMedicalCardBegin());
    var options = {
      'method': 'DELETE',
      'url': `http://localhost:5000/api/medicalcard/${medicalCardId}`,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error || !response || response.statusCode > 399) return dispatch(deleteMedicalCardFailure(error));
      const {message} = JSON.parse(response.body);
      console.log(message);
      return dispatch(deleteMedicalCardSuccess());
    });
  }
};
const deleteMedicalCardBegin = () => ({
    type: DELETE_MEDICAL_CARD_BEGIN
});
const deleteMedicalCardSuccess = () => ({
  type: DELETE_MEDICAL_CARD_SUCCESS,
});
const deleteMedicalCardFailure = error => ({
  type: DELETE_MEDICAL_CARD_FAILURE, error
});