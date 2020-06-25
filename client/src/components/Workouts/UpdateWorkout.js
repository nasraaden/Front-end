import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const UpdateWorkout = (props) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white',
      width: 400,
      height: 530,
      margin: '40px auto',
      boxShadow: '0 5px 5px 5px rgba(90, 89, 136, 0.12)',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      border: 'green',
    },
    button: {
      margin: theme.spacing(1),
      width: 300,
    },
    input: {
      display: 'none',
    },
  }));
  const classes = useStyles(1);

  const [workout, setWorkout] = useState({
    name: '',
    region: '',
    reps: '',
    weight: '',
    date: '',
  });

  console.log(props);

  useEffect(() => {
    axiosWithAuth()
      .get(`/workouts/${props.match.params.id}`)
      .then((res) => {
        setWorkout(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  const handleChanges = (e) => {
    e.preventDefault();
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/workouts/${workout.id}`, workout)
      .then((res) => {
        setWorkout(res.data);
        props.history.push(`/workouts/${workout.id}`);
      });
  };

  if (!workout) {
    return <div>Loading workout information...</div>;
  }
  
  return (
    <form onSubmit={submitForm} className={classes.container}>
      <h2>UPDATE WORKOUT</h2>
      <div>
        <TextField
          className={classes.textField}
          label='Workout Name'
          margin='normal'
          variant='outlined'
          onChange={handleChanges}
          name='name'
          value={workout.name}
        />
      </div>
      <div>
        <TextField
          id='region'
          className={classes.textField}
          label='Muscle Region'
          margin='normal'
          variant='outlined'
          onChange={handleChanges}
          name='region'
          value={workout.region}
        />
      </div>
      <div>
        <TextField
          id='reps'
          className={classes.textField}
          label='Reps'
          type='number'
          inputProps={{
            min: '0',
            step: '1',
          }}
          margin='normal'
          variant='outlined'
          onChange={handleChanges}
          name='reps'
          value={workout.reps}
        />
      </div>
      <div>
        <TextField
          id='weight'
          className={classes.textField}
          label='lbs'
          type='number'
          inputProps={{
            min: '0',
            step: '1',
          }}
          margin='normal'
          variant='outlined'
          onChange={handleChanges}
          name='weight'
          value={workout.weight}
        />
      </div>
      <div>
        <TextField
          id='date'
          className={classes.textField}
          type='date'
          margin='normal'
          variant='outlined'
          onChange={handleChanges}
          name='date'
          value={workout.date}
        />
      </div>
      <button className='submit-button' onClick={submitForm}>
        Save
      </button>
    </form>
  );
};

export default UpdateWorkout;
