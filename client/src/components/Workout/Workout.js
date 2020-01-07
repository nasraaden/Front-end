
import React, {useState, useEffect} from "react";
import { workouts } from "./WorkoutList";
import axios from "axios";


const Workout = () => {
    const [workout, setWorkout] = useState([])


    useEffect(() => {
        // const id = props.match.params.id

        // axios
        //     .get(`${id}`)
        //     .then(response => {
        //         setWorkout(response.);
        //      })
        //     .catch(error => {
        //         console.error(error);
        //     });

          setWorkout(workouts) 
    }, [])

    return (
        <div>

            <h3>{workout.name}</h3>
            <p>{workout.weight}</p>
            <p>{workout.reps}</p>
            <p>{workout.date}</p>
            <p>{workout.region}</p>
        </div>
    )
}

export default Workout;