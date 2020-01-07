import React, {useState, useEffect} from "react";
import axios from "axios";

import WorkoutCard from "./WorkoutCard"

const workouts = [
    {
        id: 1,
        name: "Bench Press",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
    {
        id: 2,
        name: "Squat",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
    {
        id: 3,
        name: "Bench Press",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
    {
        id: 4,
        name: "Bench Press",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
    {
        id: 5,
        name: "Squat",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
    {
        id: 6,
        name: "Bench Press",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
    {
        id: 7,
        name: "Bench Press",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
    {
        id: 8,
        name: "Squat",
        region: "chest",
        reps: "10",
        weight: "185",
        date: "2019-12-31",
    },
]


const WorkoutList = props => {
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
    console.log(workout);

    const addWorkout = e => {
        e.preventDefault()
        props.history.push("/add-workout")
    }

return (
    <div>
        <h2>My Workout List</h2>
        <div className="workoutlist">
            {workout.map(workOut => (
                <WorkoutCard key={workOut.id} workout={workOut} />
            ))}     
        </div>
        <button className="add-button" onClick={addWorkout}>+ Add Exercise</button>
    </div>
)
}

export default WorkoutList;

export {workouts};


// This is where you map over WorkoutCard to display the data that is being shown. 
