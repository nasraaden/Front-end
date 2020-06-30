import React, { useEffect } from 'react';

import SideNav from '../SideNav';
import WorkoutCard from './WorkoutCard';

import { connect } from 'react-redux';

const FaveWorkouts = ({ faveWorkouts }) => {
  console.log(faveWorkouts.length);
  return (
    <div>
      <div className='top' />
      <div className='side-nav'>
        <SideNav />
      </div>
      <div className='dashboard'>
        <div className='workout-list'>
          {faveWorkouts.length === 0 ? (
            <h1>NOTHING HERE YET</h1>
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
