import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { connect } from 'react-redux';
import { postWorkout } from '../../actions/workoutActions';

import SideNav from '../SideNav';

const AddWorkout = ({ postWorkout, history }) => {
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    region: '',
    reps: '',
    weight: '',
    date: '',
    description: '',
  });

  const userId = localStorage.getItem('userId');

  const handleChanges = (e) => {
    e.preventDefault();
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postWorkout(userId, newWorkout).then(() => history.push('/workouts'));
  };

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
      maxWidth: '33rem',
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

  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div className='top' />
      <div className='form'>
        <form className={classes.container} onSubmit={handleSubmit}>
          <div className={classes.insideForm}>
            <h2 className={classes.h2}>ADD AN EXERCISE</h2>
            <div className={classes.div}>
              <p className={classes.p}>Exercise Name</p>
              <TextField
                id='name'
                required
                className={classes.textField}
                placeholder='e.g. Bicep Curls'
                margin='normal'
                variant='outlined'
                name='name'
                onChange={handleChanges}
                value={newWorkout.name}
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
                required
                className={classes.textField}
                placeholder='e.g. Biceps'
                margin='normal'
                variant='outlined'
                name='region'
                onChange={handleChanges}
                value={newWorkout.region}
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
                required
                className={classes.textField}
                placeholder='Reps'
                margin='normal'
                variant='outlined'
                name='reps'
                type='number'
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                onChange={handleChanges}
                value={newWorkout.reps}
              />
            </div>
            <div className={classes.div}>
              <p className={classes.p}>Amount of Sets</p>
              <TextField
                id='weight'
                required
                className={classes.textField}
                placeholder='Sets'
                type='number'
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                margin='normal'
                variant='outlined'
                onChange={handleChanges}
                name='weight'
                value={newWorkout.weight}
              />
            </div>
            <div className={classes.div}>
              <p className={classes.p}>Date</p>
              <TextField
                id='date'
                required
                className={classes.textField}
                margin='normal'
                variant='outlined'
                type='date'
                name='date'
                onChange={handleChanges}
                value={newWorkout.date}
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
              <TextareaAutosize
                id='description'
                required
                className={classes.textArea}
                placeholder='Add a helpful description to your exercise!'
                margin='normal'
                variant='outlined'
                name='description'
                onChange={handleChanges}
                value={newWorkout.description}
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
              <button className='add-save-button'>Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { postWorkout })(AddWorkout);
