import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const getLoggedIn = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const getSignedUp = user => dispatch => {
  dispatch({ type: SIGNUP_Start });
  return axios
    .post("/signup", user)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
    })
    .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
};
