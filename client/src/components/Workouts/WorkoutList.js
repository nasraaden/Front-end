import React, { useEffect } from 'react';

// state
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';

import WorkoutCard from './WorkoutCard';

// styles
import '../Styles/Buttons.css';
import '../Styles/WorkoutList.css';

import { NavLink } from 'react-router-dom';

// icons
import { IoIosFitness } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { BsListCheck } from 'react-icons/bs';

const WorkoutList = ({ workouts, getWorkouts }) => {
  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  if (workouts === []) {
    return <h1>Add a workout to see your dashboard!</h1>;
  }
  return (
    <div>
      <div className='top' />
      <div className='side-nav'>
        <NavLink
          className='side-nav-link'
          activeClassName='side-active'
          to='/workouts'
        >
          <IoIosFitness className='side-nav-icon' />
          My Exercises
        </NavLink>
        <NavLink
          className='side-nav-link'
          activeClassName='side-active'
          exact
          to='/home'
        >
          <BsListCheck className='side-nav-icon' />
          My Routines
        </NavLink>
        <NavLink
          className='side-nav-link'
          activeClassName='side-active'
          to='/add-workout'
        >
          <GoPlus className='side-nav-icon' />
          Add Exercise
        </NavLink>
        <NavLink
          className='side-nav-link'
          activeClassName='side-active'
          exact
          to='/settings'
        >
          <BsPerson className='side-nav-icon' />
          Settings
        </NavLink>
      </div>
      <div className='dashboard'>
        <div className='workout-list'>
          {/* <div className='top' /> */}
          {workouts.map((workout) => {
            return (
              <div key={workout.id} className='workout'>
                <WorkoutCard key={workout.id} workout={workout} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchingWorkouts: state.workoutState.fetchingWorkouts,
    workouts: state.workoutState.workouts,
  };
};

export default connect(mapStateToProps, { getWorkouts })(WorkoutList);
