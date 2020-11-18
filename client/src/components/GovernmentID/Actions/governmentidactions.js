export const SET_GOVERNMENT_ID_BEGIN = "SET_GOVERNMENT_ID_BEGIN";
export const SET_GOVERNMENT_ID_SUCCESS = "SET_GOVERNMENT_ID_SUCCESS";
export const SET_GOVERNMENT_ID_FAILURE = "SET_GOVERNMENT_ID_FAILURE";
export const ADD_GOVERNMENT_ID_BEGIN = "ADD_GOVERNMENT_ID_BEGIN";
export const ADD_GOVERNMENT_ID_SUCCESS = "ADD_GOVERNMENT_ID_SUCCESS";
export const ADD_GOVERNMENT_ID_FAILURE = "ADD_GOVERNMENT_ID_FAILURE";
export const UPDATE_GOVERNMENT_ID_SUCCESS = "UPDATE_GOVERNMENT_ID_SUCCESS";
export const UPDATE_GOVERNMENT_ID_BEGIN = "UPDATE_GOVERNMENT_ID_BEGIN";
export const UPDATE_GOVERNMENT_ID_FAILURE = "UPDATE_GOVERNMENT_ID_FAILURE";
export const UPDATE_GOVERNMENT_ID_BY_USER = "UPDATE_GOVERNMENT_ID_BY_USER";
export const DELETE_GOVERNMENT_ID_SUCCESS = "DELETE_GOVERNMENT_ID_SUCCESS";
export const DELETE_GOVERNMENT_ID_BEGIN = "DELETE_GOVERNMENT_ID_BEGIN";
export const DELETE_GOVERNMENT_ID_FAILURE = "DELETE_GOVERNMENT_ID_FAILURE";

const request = require('request');
//Set GovernmentId set of API calls
export function setGovernmentId(userId){
  return async (dispatch) =>{
    dispatch(setGovernmentIdBegin());
    var options = {
      'method': 'GET',
      'url': `http://localhost:5000/api/governmentid/user/${userId}`,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error || !response || response.statusCode > 399) return dispatch(setGovernmentIdFailure(error));
      const governmentId = JSON.parse(response.body)[0];
      console.log('GovernmentId fetched...', governmentId);
      return dispatch(setGovernmentIdSuccess(governmentId));
    });
  }
};
const setGovernmentIdBegin = () => ({
    type: SET_GOVERNMENT_ID_BEGIN
});
const setGovernmentIdSuccess = governmentId => ({
  type: SET_GOVERNMENT_ID_SUCCESS, governmentId
});
const setGovernmentIdFailure = error => ({
  type: SET_GOVERNMENT_ID_FAILURE, error
});

//Add  GovernmentId set of API calls
export function addGovernmentId(governmentId){
  return async (dispatch) => {
    dispatch(addGovernmentIdBegin());
    var options = {
      'method': 'POST',
      'url': 'http://localhost:5000/api/governmentid/',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(governmentId)
    };
    request(options, function (error, response) {
      if (error || !response || response.statusCode > 399) return dispatch(addGovernmentIdFailure(error));
      const governmentIdResponse = JSON.parse(response.body);
      console.log("Added GovernmentId: ", governmentIdResponse);
      dispatch(addGovernmentIdSuccess(governmentIdResponse));
    });
  }
}
const addGovernmentIdBegin = ()=>({
    type : ADD_GOVERNMENT_ID_BEGIN
});
const addGovernmentIdSuccess = (governmentId)=>({
    type:ADD_GOVERNMENT_ID_SUCCESS, governmentId
});
const addGovernmentIdFailure = (error)=>({
    type:ADD_GOVERNMENT_ID_FAILURE, error
});

//Update Government ID Actions

export function updateGovernmentId(governmentId){
  return async (dispatch) => {
    dispatch(updateGovernmentIdBegin());
    var options = {
      'method': 'PUT',
      'url': 'http://localhost:5000/api/governmentid/',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(governmentId)
    };
    request(options, function (error, response) {
      if (error || !response || response.statusCode > 399) return dispatch(updateGovernmentIdFailure(error));
      const governmentIdResponse = JSON.parse(response.body);
      console.log("Updated GovernmentId: ", governmentIdResponse);
      dispatch(updateGovernmentIdSuccess(governmentIdResponse));
    });
  }
}
const updateGovernmentIdBegin = ()=>({
    type : UPDATE_GOVERNMENT_ID_BEGIN
});
const updateGovernmentIdSuccess = (governmentId)=>({
    type:UPDATE_GOVERNMENT_ID_SUCCESS, governmentId
});
const updateGovernmentIdFailure = (error)=>({
    type:UPDATE_GOVERNMENT_ID_FAILURE, error
});
export const userUpdatingGovernmentId = () =>({
  type:UPDATE_GOVERNMENT_ID_BY_USER
});

//Delete Government ID Actions
export function deleteGovernmentId(governmentIdNumber){
  return async (dispatch) =>{
    dispatch(deleteGovernmentIdBegin());
    var options = {
      'method': 'DELETE',
      'url': `http://localhost:5000/api/governmentid/${governmentIdNumber}`,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error || !response || response.statusCode > 399) return dispatch(deleteGovernmentIdFailure(error));
      const {message} = JSON.parse(response.body);
      console.log(message);
      return dispatch(deleteGovernmentIdSuccess());
    });
  }
};
const deleteGovernmentIdBegin = () => ({
    type: DELETE_GOVERNMENT_ID_BEGIN
});
const deleteGovernmentIdSuccess = () => ({
  type: DELETE_GOVERNMENT_ID_SUCCESS,
});
const deleteGovernmentIdFailure = error => ({
  type: DELETE_GOVERNMENT_ID_FAILURE, error
});