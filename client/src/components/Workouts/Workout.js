import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getWorkoutById } from '../../actions/workoutActions';
import { addToFaves } from '../../actions/workoutActions';
import SideNav from '../SideNav';

import { useToast, Button } from '@chakra-ui/core';

import { BsHeart, BsHeartFill } from 'react-icons/bs';

const Workout = ({
  workout,
  getWorkoutById,
  faveWorkouts,
  addToFaves,
  match,
  history,
}) => {
  const userId = localStorage.getItem('userId');
  const toast = useToast();

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

  const fave = () => {};

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
          <div>
            {faveWorkouts.includes(workout) ? (
              <BsHeartFill
                className='heart-icon'
                onClick={() =>
                  toast({
                    title: 'Wait a minute!',
                    description: 'This workout is already in your favorites.',
                    status: 'info',
                    duration: 1500,
                    isClosable: true,
                    position: 'top-right',
                  })
                }
              />
            ) : (
              <BsHeart
                className='heart-icon'
                onClick={() => (
                  addToFaves(workout),
                  toast({
                    title: 'Success!',
                    description:
                      'This workout has been added to your favorites.',
                    status: 'success',
                    duration: 1500,
                    isClosable: true,
                    position: 'top-right',
                  })
                )}
              />
            )}
          </div>
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
