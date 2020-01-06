import {ADD_WORKOUT_START, ADD_WORKOUT_SUCCESS, ADD_WORKOUT_FAILURE} from "../actions/workoutActions";

const initialState = {
    isAdded: false,
    isLoading: false,
    error: ""
}

export const workoutReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_WORKOUT_START: 
            return {
                ...state,
                isAdded: false,
                isLoading: true
            }
        case ADD_WORKOUT_SUCCESS:
            return {
                ...state,
                isAdded: true,
                isLoading: false
            }
        case ADD_WORKOUT_FAILURE: 
            return {
                ...state,
                isAdded: false,
                error: action.payload
            }
        default:
            return state;
    }
}