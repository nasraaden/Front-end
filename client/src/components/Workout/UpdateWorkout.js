import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const UpdateWorkout = () => {
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FAFAFA',
            width: 400,
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

    const [workout, setWorkout] = useState({
        workoutName: "",
        region: "",
        reps: "",
        weight: "",
        sets: "",
        date: ""
    });

    const handleChanges = e => {
        setWorkout({
            ...workout, [e.target.name]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        setWorkout({
            workoutName: "",
            region: "",
            reps: "",
            weight: "",
            sets: "",
            date: ""
        });
    }

    return (
        <form onSubmit={submitForm} className={classes.container}>
            <h2>ADD A WORKOUT</h2>
            <div>
                <TextField
                    id="workoutName"
                    required="true"
                    className={classes.textField}
                    label="Workout Name"
                    helperText="What is your exercise called?"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="workoutName"
                    value={workout.workoutName}
                />
            </div>
            <div>
                <TextField 
                    id="region"
                    className={classes.textField}
                    label="Muscle Region"
                    helperText="Muscle group this targets"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="region"
                    value={workout.region}
                />
            </div>
            <div>
                <TextField 
                    id="reps"
                    required="true"
                    className={classes.textField}
                    label="Reps"
                    type="number"
                    inputProps={
                        {
                            min: "0",
                            step: "1"
                        }
                    }
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="reps"
                    value={workout.reps}
                />
            </div>
            <div>
                <TextField 
                    id="weight"
                    className={classes.textField}
                    label="lbs"
                    type="number"
                    inputProps={
                        {
                            min: "0",
                            step: "1"
                        }
                    }
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="weight"
                    value={workout.weight}
                />
            </div>
            <div>
                <TextField 
                    id="sets"
                    required="true"
                    className={classes.textField}
                    label="Amount of sets"
                    type="number"
                    inputProps={
                        {
                            min: "0",
                            step: "1"
                        }
                    }
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="sets"
                    value={workout.sets}
                />
            </div>
            <div>
                <TextField 
                    id="date"
                    required="true"
                    className={classes.textField}
                    type="date"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChanges}
                    name="date"
                    value={workout.date}
                />
            </div>
            <Button variant="contained" className={classes.button} onClick={submitForm}>Add Workout!</Button>
        </form>
    )
}

export default UpdateWorkout;