import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import Button from '@material-ui/core/Button';

const workouts = [
    {
        id: 0,
        name: "bench press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 1,
        name: "squat",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 2,
        name: "push-press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "shoulders"
    },
]



const WorkoutList = () => {
    const [workout, setWorkout] = useState([])
    useEffect(() => {
        const getWorkouts = () => {
            // axios
            //     .get('')
            //     .then( res => {
            //         setWorkout(res.)
            //     })
            //     .catch( err => {
            //         console.log("unable to grab workouts", err)
            //     })
            setWorkout(workouts);
        }
        getWorkouts();
    }, []);
    // console.log(workout);
    

    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: '#FAFAFA',
            width: '80%',
            margin: '50px auto',
            boxShadow: '0 2px 5px 1px rgba(90, 89, 136, 0.12)'
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

        {workout.map(workOut => {
            return(
                <div className={classes.container} key={workOut.id}>
                <WorkoutCard key={workOut.id} workout={workOut} />
                <Link to={`/workout/${workOut.id}`}>
                    
                <MenuSharpIcon/>
                </Link>
                </div>
               
            )}
        )}

        <div className="home-container">
        <Link to="/AddWorkOut"><button className={classes.button}> + Add New Exercise</button></Link>
        </div>
    </div>
)
}

export default WorkoutList;

export {workouts};


// This is where you map over WorkoutCard to display the data that is being shown. 
