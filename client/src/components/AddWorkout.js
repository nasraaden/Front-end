import React, {useState} from "react";

import {connect} from "react-redux"
import {addWorkout} from "../actions/workoutActions"

const AddWorkout = () => {

    const [newWorkout, setNewWorkout] = useState({id: Date.now(), name: "", reps: "", date: "", region: ""})

    const handleChanges = e => {
        e.preventDefault();
        setNewWorkout({...newWorkout, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        props.addWorkout()
    }

    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FAFAFA',
            width: 400,
            height: 500,
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

    return (
        <div>
            <form className={classes.container} onSubmit={handleSubmit}>
                <h2>ADD A WORKOUT</h2>
                <div>
                    <TextField
                        id="name"
                        className={classes.textField}
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChanges}
                        value={newWorkout.name}
                    />
                </div>
                <div>
                    <TextField
                        id="reps"
                        className={classes.textField}
                        label="Reps Completed"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChanges}
                        value={newWorkout.reps}
                    />
                </div>
                <div>
                    <TextField
                        id="date"
                        className={classes.textField}
                        label="Date"
                        type="date"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChanges}
                        value={newWorkout.date}
                    />
                </div>
                <div>
                    <TextField
                        id="region"
                        className={classes.textField}
                        label="Region"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChanges}
                        value={newWorkout.region}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {addWorkout})(AddWorkout);