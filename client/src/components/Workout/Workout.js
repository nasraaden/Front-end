import React from "react";
import {useState, useEffect} from "react";
import { workouts } from "./WorkoutList";
import axios from "axios";


const Workout = (props) => {
    const [workout, setWorkout] = useState([])
    console.log(props);
    

    useEffect(() => {
        const id = props.match.params.id

        // axios
        //     .get(`${id}`)
        //     .then(response => {
        //         setWorkout(response.);
        //      })
        //     .catch(error => {
        //         console.error(error);
        //     });

          setWorkout(workouts[id]) 
    }, [props.match.params.id])

   console.log(workouts);

   const edit = e => {
    e.preventDefault();
    props.history.push(`/updateworkout/${workout.id}`);
  };

    return (
        <div className="workout-container">
            <h3>{`${workout.name}`}</h3>
            <p>{`Weight: ${workout.weight} lbs`}</p>
            <p>{`Reps Completed: ${workout.reps}`}</p>
            <p>{`Date: ${workout.date}`}</p>
            <p>{`Region: ${workout.region}`}</p>

            <button className="submit-button">Edit</button>
            <button className="delete-button">Delete</button>
        </div>
    )
}

export default Workout;