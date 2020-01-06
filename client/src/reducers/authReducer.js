import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/authActions"

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    error: ""
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START: 
            return {
                ...state,
                isLoggedIn: false,
                isLoading: true,
                error: ""
            }
        case LOGIN_SUCCESS:
            return {
                ...state, 
                isLoggedIn: true,
                isLoading: false,
            }
        case LOGIN_FAIL: 
            return {
                ...state, 
                isLoggedIn: false,
                error: action.payload
            }
        default:
            return state;
    }
}