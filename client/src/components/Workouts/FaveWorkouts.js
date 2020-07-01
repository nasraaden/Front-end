import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import SideNav from '../SideNav';
import WorkoutCard from './WorkoutCard';

import { connect } from 'react-redux';

const FaveWorkouts = ({ faveWorkouts }) => {
  console.log('whole thing', faveWorkouts);
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div className='top' />
      <div className='dashboard'>
        <div className='workout-list'>
          {faveWorkouts.length === 0 ? (
            <h1 style={{ fontSize: '1.2rem' }}>
              You don't have any exercises in your favorites. Go to{' '}
              <Link to='/workouts' style={{ color: 'black' }}>
                My Exercises
              </Link>{' '}
              and add some!
            </h1>
          ) : (
            faveWorkouts.map((workout) => {
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
    faveWorkouts: state.workoutState.faveWorkouts,
  };
};

export default connect(mapStateToProps)(FaveWorkouts);
