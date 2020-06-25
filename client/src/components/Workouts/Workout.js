import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { connect } from 'react-redux';
import { getWorkoutById } from '../../actions/workoutActions';

const Workout = ({
  workout,
  getWorkoutById,
  fetchingWorkouts,
  match,
  history,
}) => {
  // console.log('WORKOUT RENDERED CORRECTLY!');
  // console.log(props.fetchingWorkouts);

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    getWorkoutById(userId, match.params.id);
  }, [userId, getWorkoutById, match.params.id]);

  console.log('WORKOUT', workout, 'WORKOUT NAME', workout.name);

  const editWorkout = (e) => {
    e.preventDefault();
    history.push(`/update-workout/${match.params.id}`);
  };

  const deleteWorkout = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {fetchingWorkouts ? (
        <h1>Loading</h1>
      ) : (
        <div className='workout-container'>
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
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchingWorkouts: state.workoutState.fetchingWorkouts,
    workout: state.workoutState.workout,
  };
};

export default connect(mapStateToProps, { getWorkoutById })(Workout);
