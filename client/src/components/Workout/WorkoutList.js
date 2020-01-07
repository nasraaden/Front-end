import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';


const workouts = [
    {
        id: 0,
        name: "Bench Press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 1,
        name: "Squat",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 2,
        name: "Push Press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "shoulders"
    },
    {
        id: 3,
        name: "Bench Press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 4,
        name: "Squat",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 5,
        name: "Push Press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "shoulders"
    },
    {
        id: 6,
        name: "Bench Press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 7,
        name: "Squat",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
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

    return (
        <div >
            <h2>My Workout List</h2>
            <div className="workoutlist">
            {workout.map(workOut => {
                return(
                    <div key={workOut.id} className="workout">
                    <WorkoutCard key={workOut.id} workout={workOut} />
                    {/* <Link to={`/workout/${workOut.id}`}>
                    <button className="edit-button"><EditIcon color="disabled"/> Edit </button>
                    </Link> */}
                    </div>
                )}
            )}
            </div>
            <div>
            <Link to="/AddWorkOut"><button className="add-button"> + Add New Exercise</button></Link>
            </div>
        </div>
    )
}

export default WorkoutList;

export {workouts};


// This is where you map over WorkoutCard to display the data that is being shown. 
