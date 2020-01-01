import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

const Login = () => {

    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FAFAFA',
            width: 350,
            height: 350,
            margin: '50px auto',
            boxShadow: '0 2px 5px 1px rgba(90, 89, 136, 0.12)'
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 300,
            border: "green"
        },
        button: {
            margin: theme.spacing(1),
            width: 300
        },
        input: {
            display: 'none',
        },
    }));
    const classes = useStyles(1);

    return(
        <div>
            <form className={classes.container}>
                <h2>LOGIN</h2>
                <div>
                    <TextField
                        id="username"
                        className={classes.textField}
                        label="Username"
                        margin="normal"
                        variant="outlined"
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
                    />
                </div>
                <Button variant="contained" className={classes.button}>Login</Button>
                <p>Don't have an account? <Link to="/signup"><Button variant="contained">Signup</Button></Link></p>
            </form>
        </div>
    )   
}

export default Login;