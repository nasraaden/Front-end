import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getSignedUp } from '../actions/authActions';
import { connect } from 'react-redux';

import './Auth.css';

const Signup = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    checkPassword: '',
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.checkPassword) {
      props.getSignedUp({ username: user.username, password: user.password });
      props.history.push('/workout');
      setUser({
        ...user,
        username: '',
        password: '',
        checkPassword: '',
      });
    }
  };
  const useStyles = makeStyles((theme) => ({
    focused: {
      floatingLabelFocusStyle: {
        color: 'yellow',
      },
    },

    outlinedInput: {
      '&$focused $notchedOutline': {
        border: '2px solid #00A35E',
      },
    },
    notchedOutline: {},
  }));
  const classes = useStyles(1);

  return (
    <div className='form-container'>
      <div className='left'>
        <div className='left-text'>
          <h1>Welcome!</h1>
          <p>Sign up and start your journey with Weightlifting Journal.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <h2>Sign Up</h2>
        <div>
          <TextField
            id='username'
            label='Username'
            margin='normal'
            variant='outlined'
            className='input'
            onChange={handleChanges}
            // InputLabelProps={{
            //   classes: {
            //     root: classes.focused,
            //     focused: classes.focused,
            //   },
            // }}
            InputProps={{
              classes: {
                root: classes.outlinedInput,
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            floatingLabelFocusStyle={classes.floatingLabelFocusStyle}
          />
        </div>
        <div>
          <TextField
            id='password'
            className='input'
            label='Password'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
          />
        </div>
        <div>
          <TextField
            id='checkPassword'
            className='input'
            label='Verify Password'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
          />
        </div>
        <Button type='submit' variant='contained' className='button'>
          Signup
        </Button>
        <p>
          Already have an account?{' '}
          <Link to='/login' className='redirect'>
            Login here!
          </Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getSignedUp })(Signup);
