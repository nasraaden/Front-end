import React from 'react';

import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import WorkoutList from './components/Workouts/WorkoutList';
import Workout from './components/Workouts/Workout';
import AddWorkout from './components/Workouts/AddWorkout';
import UpdateWorkout from './components/Workouts/UpdateWorkout';
import FaveWorkouts from './components/Workouts/FaveWorkouts';

import PrivateRoute from './utils/privateRoute';

import { ThemeProvider } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute exact path='/exercises' component={WorkoutList} />
          <PrivateRoute path='/exercises/:id' component={Workout} />
          <PrivateRoute path='/update-exercise/:id' component={UpdateWorkout} />
          <PrivateRoute path='/add-exercise' component={AddWorkout} />
          <PrivateRoute path='/favorites' component={FaveWorkouts} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
