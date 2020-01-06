import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/authReducer";
<<<<<<< HEAD
import { workoutReducer } from "./reducers/workoutReducer"

const rootReducer = combineReducers({
    authReducer,
    workoutReducer
})
=======
import { workoutReducer } from "./reducers/workoutReducer";

const rootReducer = combineReducers({
  authReducer,
  workoutReducer
});
>>>>>>> ebe45bc335cb99b37a4a3d7f2be904bd74386c7b

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();