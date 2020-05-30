import React from 'react';

import './App.css';
import './Media.css';

import { Route, Switch } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';

import Signup from './components/Signup';
import WorkoutCard from './components/Workout/WorkoutCard';
import UpdateWorkout from './components/Workout/UpdateWorkout';
import WorkoutList from './components/Workout/WorkoutList';
import AddWorkout from './components/Workout/AddWorkout';
import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute exact path='/workouts' component={WorkoutList} />
        <PrivateRoute path='/workouts/:id' component={WorkoutCard} />
        <PrivateRoute path='/update-workout/:id' component={UpdateWorkout} />
        <PrivateRoute path='/add-workout' component={AddWorkout} />
      </Switch>
    </div>
  );
}

export default App;
