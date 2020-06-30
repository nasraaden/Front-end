import React, { useEffect } from 'react';

// state
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/workoutActions';

import WorkoutCard from './WorkoutCard';
import SideNav from '../SideNav';

// styles
import '../Styles/Buttons.css';
import '../Styles/WorkoutList.css';

import { NavLink } from 'react-router-dom';

// icons
import { IoIosFitness } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';

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
        <SideNav />
      </div>
      <div className='dashboard'>
        <div className='workout-list'>
          {workouts.length === 0 ? (
            <h1>NOTHING HERE YET</h1>
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
