export const SET_USER_BEGIN = "SET_USER_BEGIN";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILURE = "SET_USER_FAILURE";
export const ADD_USER_BEGIN = "ADD_USER_BEGIN";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

const request = require('request');
//Set User set of API calls
export function setUser(userId, history){
  return async (dispatch) =>{
    dispatch(setUserBegin());
    var options = {
      'method': 'GET',
      'url': `http://localhost:5000/api/users/${userId}`,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error || !response || response.statusCode > 399) return dispatch(setUserFailure(error));
      const user = JSON.parse(response.body)[0];
      console.log('User fetched...', user);
      setTimeout(()=>{history.push("/userinformation")}, 0);
      return dispatch(setUserSuccess(user));
    });
  }
};
const setUserBegin = () => ({
    type: SET_USER_BEGIN
});
const setUserSuccess = user => ({
  type: SET_USER_SUCCESS, user
});
const setUserFailure = error => ({
  type: SET_USER_FAILURE, error
});

//Add  User set of API calls
export function addUser(user, history){
  return async (dispatch) => {
    dispatch(addUserBegin());
    var options = {
      'method': 'POST',
      'url': 'http://localhost:5000/api/users/',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };
    request(options, function (error, response) {
      if (error || !response || response.statusCode > 399) return dispatch(addUserFailure(error));
      const userResponse = JSON.parse(response.body);
      console.log("Added User: ", userResponse);
      setTimeout(()=>{history.push("/userinformation")}, 0);
      dispatch(addUserSuccess(userResponse));
    });
  }
}
const addUserBegin = ()=>({
    type : ADD_USER_BEGIN
});
const addUserSuccess = (user)=>({
    type:ADD_USER_SUCCESS, user
});
const addUserFailure = (error)=>({
    type:ADD_USER_FAILURE, error
});