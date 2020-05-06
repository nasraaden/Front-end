import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoggedIn } from '../actions/authActions';
import jwt from 'jsonwebtoken';

const Login = (props) => {
  console.log(jwt.decode(localStorage.getItem('token')));
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

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChanges = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    props.getLoggedIn(credentials).then(() => props.history.push('/workout'));
  };

  return (
    <div className='form-container'>
      <div className='left'>
        <div className='left-text'>
          <h1>Welcome back!</h1>
          <p>Keep your Weightlifting Journal up to date!</p>
        </div>
      </div>
      <form onSubmit={login} className='form'>
        <h2>Login</h2>
        <div>
          <TextField
            name='username'
            label='Username'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
            className='input'
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
            name='password'
            label='Password'
            type='password'
            margin='normal'
            variant='outlined'
            onChange={handleChanges}
            className='input'
          />
        </div>
        <Button type='submit' variant='contained' className='button'>
          Login
        </Button>
        <p>
          Don't have an account?{' '}
          <Link to='/signup' className='redirect'>
            Signup here!
          </Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getLoggedIn })(Login);
