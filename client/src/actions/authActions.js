<<<<<<< HEAD

import { axiosWithAuth } from "../utils/axiosWithAuth"
=======
import axios from "axios";
>>>>>>> ebe45bc335cb99b37a4a3d7f2be904bd74386c7b

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const getLoggedIn = creds => dispatch => {
    dispatch({type: LOGIN_START})
    return axiosWithAuth()
    .post("/login", creds)
    .then(res => {
        localStorage.setItem("token", res.data.payload)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
    })
    .catch(err => {
<<<<<<< HEAD
        dispatch({type: LOGIN_FAIL, payload: err})
=======
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const getSignedUp = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("/signup", user)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data.payload });
>>>>>>> ebe45bc335cb99b37a4a3d7f2be904bd74386c7b
    })
}