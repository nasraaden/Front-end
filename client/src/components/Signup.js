import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    checkPassword: ""
  });

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.password === user.checkPassword) {
      setUser({
        ...user,
        username: "",
        password: "",
        checkPassword: ""
      });
    }
  };
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      width: 400,
      height: 430,
      margin: "50px auto",
      boxShadow: "0 5px 5px 5px rgba(90, 89, 136, 0.12)"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
      border: "green"
    },
    button: {
      margin: theme.spacing(1),
      width: 300,
    },
    input: {
      display: "none"
    }
  }));
  const classes = useStyles(1);

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.container}>
        <h2>SIGN UP</h2>
        <div>
          <TextField
            id="username"
            className={classes.textField}
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={handleChanges}
          />
        </div>
        <div>
          <TextField
            id="password"
            className={classes.textField}
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={handleChanges}
          />
        </div>
        <div>
          <TextField
            id="checkPassword"
            className={classes.textField}
            label="Verify Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={handleChanges}
          />
        </div>
        <Button variant="contained" className={classes.button}>
          Signup
        </Button>
        <p>
          Already have an account? <Link to="/login">Login here!</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
