import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { connect } from 'react-redux';
import { getWorkoutById } from '../../actions/workoutActions';
import { addToFaves } from '../../actions/workoutActions';
import SideNav from '../SideNav';

const Workout = ({
  workout,
  getWorkoutById,
  faveWorkouts,
  addToFaves,
  match,
  history,
}) => {
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    getWorkoutById(userId, match.params.id);
  }, [userId, getWorkoutById, match.params.id]);

  const editWorkout = (e) => {
    e.preventDefault();
    history.push(`/update-workout/${match.params.id}`);
  };

  const deleteWorkout = (e) => {
    e.preventDefault();
  };

  const fave = () => {
    addToFaves(workout);
  };

  console.log(faveWorkouts);

  return (
    <div>
      <div className='top' />
      <div className='side-nav'>
        <SideNav />
      </div>
      <div className='single-workout-container'>
        <div className='single-workout'>
          <h3>{workout.name}</h3>
          <p>Region: {workout.region}</p>
          <p>Reps Completed: {workout.reps}</p>
          <p>Weight: {workout.weight}</p>
          <p>Date: {workout.date}</p>
          <button className='submit-button' onClick={editWorkout}>
            Edit
          </button>
          <button className='delete-button' onClick={deleteWorkout}>
            Delete
          </button>
          <button onClick={fave}>Fave</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchingWorkouts: state.workoutState.fetchingWorkouts,
    workout: state.workoutState.workout,
    faveWorkouts: state.workoutState.faveWorkouts,
  };
};

export default connect(mapStateToProps, { getWorkoutById, addToFaves })(
  Workout
);
