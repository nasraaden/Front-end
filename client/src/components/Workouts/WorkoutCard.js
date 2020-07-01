import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout }) => {
  return (
    <div className='workout-card'>
      <div>
        <p className='name'>{workout.name}</p>
        <p className='region'>{workout.region}</p>
      </div>
      <Link to={`/workouts/${workout.id}`}>
        <EditIcon color='disabled' />{' '}
      </Link>
    </div>
  );
};

export default WorkoutCard;
