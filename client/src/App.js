import React from 'react';

import './App.css';
import './Media.css';

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

function App() {
  // const [favesList, setFavesList] = useState([]);

  // const addToFavesList = (workout) => {
  //   setFavesList([...favesList, workout]);
  // };

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute exact path='/workouts' component={WorkoutList} />
        <PrivateRoute path='/workouts/:id' component={Workout} />
        <PrivateRoute path='/update-workout/:id' component={UpdateWorkout} />
        <PrivateRoute path='/add-workout' component={AddWorkout} />
        <PrivateRoute path='/favorites' component={FaveWorkouts} />
      </Switch>
    </div>
  );
}

export default App;
