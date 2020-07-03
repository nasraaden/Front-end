import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import {
  getWorkoutById,
  deleteWorkout,
  addToFaves,
} from '../../actions/workoutActions';
import SideNav from '../SideNav';

import { useToast } from '@chakra-ui/core';

import { BsHeart, BsHeartFill } from 'react-icons/bs';

const Workout = ({
  workout,
  getWorkoutById,
  deleteWorkout,
  addToFaves,
  match,
  history,
  faveAdded,
}) => {
  const userId = localStorage.getItem('userId');
  const toast = useToast();

  useEffect(() => {
    getWorkoutById(userId, match.params.id);
  }, [userId, getWorkoutById, match.params.id]);

  const editWorkout = (e) => {
    e.preventDefault();
    history.push(`/update-exercise/${match.params.id}`);
  };

  const removeWorkout = (e) => {
    e.preventDefault();
    deleteWorkout(userId, workout.id)
      .then(() => history.push('/exercises'))
      .then(() =>
        toast({
          title: 'Deleted!',
          description:
            'This exercise has been deleted from your exercise list.',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        })
      );
  };
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div className='top' />
      <div className='single-workout-container'>
        <div className='single-workout'>
          <div className='workout-top'>
            <h3>{workout.name}</h3>
            <p className='top-p'>Region: {workout.region}</p>
            <div className='reps-weight'>
              <p>Reps: {workout.reps}</p>
              <p>|</p>
              <p>Sets: {workout.weight}</p>
            </div>
          </div>
          <div className='workout-middle'>
            <p>Date: {workout.date}</p>
            <div className='edit-del-fave'>
              <p onClick={editWorkout}>Edit</p>
              <p>|</p>
              <p onClick={removeWorkout}>Delete</p>
              <p>|</p>
              <p>
                {faveAdded ? (
                  <BsHeartFill
                    className='heart-icon'
                    onClick={() =>
                      toast({
                        title: 'Wait a minute!',
                        description:
                          'This exercise is already in your favorites.',
                        status: 'info',
                        duration: 2000,
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
                          'This exercise has been added to your favorites.',
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        position: 'top-right',
                      })
                    )}
                  />
                )}
              </p>
            </div>
          </div>
          <div className='workout-bottom'>
            <p className='desc'>Description</p>
            <p className='text'>{workout.description}</p>
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
    faveAdded: state.workoutState.faveAdded,
  };
};

export default connect(mapStateToProps, {
  getWorkoutById,
  deleteWorkout,
  addToFaves,
})(Workout);
