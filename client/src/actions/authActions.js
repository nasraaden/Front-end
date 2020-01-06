import { axiosWithAuth } from "../utils/axiosWithAuth"

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
        dispatch({type: LOGIN_FAIL, payload: err})
    })
}