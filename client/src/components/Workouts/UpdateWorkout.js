import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { getWorkoutById, editWorkout } from '../../actions/workoutActions';
import SideNav from '../SideNav';

const UpdateWorkout = ({ editWorkout, match, history }) => {
  const useStyles = makeStyles((theme) => ({
    focused: {},
    outlinedInput: {
      '&$focused $notchedOutline': {
        border: '2px solid #00A35E',
      },
    },
    notchedOutline: {},
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '16rem',
      '@media (max-width: 890px)': {
        marginLeft: '12em',
      },
      '@media (max-width: 500px)': {
        marginLeft: '0em',
      },
    },
    textField: {
      width: '35rem',
      '@media (max-width: 890px)': {
        width: '25rem',
      },
    },
    textArea: {
      marginTop: theme.spacing(2),
      minWidth: '33rem',
      maxWidth: '34.6rem',
      minHeight: '10rem',
      borderRadius: '.2rem',
      border: '1px solid lightgray',
      fontSize: '1rem',
      padding: theme.spacing(2),
      lineHeight: '1.3rem',
      '@media (max-width: 890px)': {
        minWidth: '23rem',
        maxWidth: '23rem',
      },
    },
    insideForm: {
      marginTop: '5rem',
    },
    h2: {
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    div: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(1),
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

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axiosWithAuth()
      .get(`users/${userId}/workouts/${match.params.id}`)
      .then((res) => {
        setWorkout(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [userId, match.params.id]);
  const handleChanges = (e) => {
    e.preventDefault();
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    editWorkout(userId, workout.id, workout).then((res) => {
      history.push(`/exercises/${workout.id}`);
    });
  };

  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div className='top' />
      <div className='form'>
        <form className={classes.container} onSubmit={submitForm}>
          <div className={classes.insideForm}>
            <h2 className={classes.h2}>UPDATE EXERCISE</h2>
            <div className={classes.div}>
              <p className={classes.p}>Exercise Name</p>
              <TextField
                className={classes.textField}
                margin='normal'
                variant='outlined'
                onChange={handleChanges}
                name='name'
                value={workout.name}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className={classes.div}>
              <p className={classes.p}>Exercise Region</p>
              <TextField
                id='region'
                className={classes.textField}
                label='Muscle Region'
                margin='normal'
                variant='outlined'
                onChange={handleChanges}
                name='region'
                value={workout.region}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className={classes.div}>
              <p className={classes.p}>Amount of Reps</p>
              <TextField
                id='reps'
                className={classes.textField}
                label='Reps'
                type='number'
                margin='normal'
                variant='outlined'
                onChange={handleChanges}
                name='reps'
                value={workout.reps}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className={classes.div}>
              <p className={classes.p}>Amount of Sets</p>
              <TextField
                id='weight'
                className={classes.textField}
                label='lbs'
                type='number'
                margin='normal'
                variant='outlined'
                onChange={handleChanges}
                name='weight'
                value={workout.weight}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className={classes.div}>
              <p className={classes.p}>Date</p>
              <TextField
                id='date'
                className={classes.textField}
                type='date'
                margin='normal'
                variant='outlined'
                onChange={handleChanges}
                name='date'
                value={workout.date}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className={classes.div}>
              <p className={classes.p}>Description</p>
              <textarea
                id='description'
                className={classes.textArea}
                margin='normal'
                variant='outlined'
                name='description'
                onChange={handleChanges}
                value={workout.description}
              />
            </div>
            <div className={classes.div}>
              <button className='add-save-button' onClick={submitForm}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { getWorkoutById, editWorkout })(
  UpdateWorkout
);
