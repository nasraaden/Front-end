import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

// state
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';

import WorkoutCard from './WorkoutCard';
import SideNav from '../SideNav';

// styles
import '../Styles/Buttons.css';
import '../Styles/WorkoutList.css';

const WorkoutList = ({ workouts, getWorkouts }) => {
  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div className='top' />
      <div className='dashboard'>
        <div className='workout-list'>
          {workouts.length === 0 ? (
            <h1 style={{ fontSize: '1.2rem' }}>
              You don't have any exercises yet.{' '}
              <Link to='/add-exercise' style={{ color: 'black' }}>
                Add
              </Link>{' '}
              one to to see it here!{' '}
            </h1>
          ) : (
            workouts.map((workout) => {
              return (
                <div key={workout.id} className='workout'>
                  <WorkoutCard key={workout.id} workout={workout} />
                </div>
              );
            })
          )}
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
