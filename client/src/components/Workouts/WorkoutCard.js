import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout }) => {
  console.log('WORKOUT CARD RENDERED CORRECTLY! ');
  console.log('WORKOUT', workout, 'NAME', workout.name);

  return (
    <div className='workout-card'>
      <div>
        <p className='name'>{workout.name}</p>
        <p className='region'>{workout.region}</p>
      </div>

      {/* <p>{workout.region}</p> */}
      <Link to={`/workouts/${workout.id}`}>
        <EditIcon color='disabled' />{' '}
      </Link>
    </div>
  );
};

export default WorkoutCard;
