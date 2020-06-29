import React, { useEffect } from 'react';

import SideNav from '../SideNav';
import WorkoutCard from './WorkoutCard';

import { connect } from 'react-redux';

const FaveWorkouts = ({ faveWorkouts }) => {
  useEffect(() => {
    localStorage.setItem('faveWorkouts', JSON.stringify(faveWorkouts));
  }, []);

  const retrievedData = localStorage.getItem('faveWorkouts');

  const data = JSON.parse(retrievedData);

  console.log('DATA', data);

  console.log(faveWorkouts);
  return (
    <div>
      <div className='top' />
      <div className='side-nav'>
        <SideNav />
      </div>
      <div className='dashboard'>
        <div className='workout-list'>
          {faveWorkouts.map((workout) => {
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
    faveWorkouts: state.workoutState.faveWorkouts,
  };
};

export default connect(mapStateToProps)(FaveWorkouts);
