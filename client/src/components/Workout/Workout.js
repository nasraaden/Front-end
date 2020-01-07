import React, {useState, useEffect} from "react";
import { workouts } from "./WorkoutList";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";


const Workout = props => {
    const [workout, setWorkout] = useState([])

    // const id = props.match.params.id

    useEffect(() => {
        // axiosWithAuth()
        //     .get(`/workouts/${props.match.params.id}`)
        //     .then(response => {
        //         setWorkout(response.data);
        //      })
        //     .catch(error => {
        //         console.error(error);
        //     });
          setWorkout(workouts) 
    }, [])

    const deleteWorkout = e => {
        e.preventDefault();
        axios
            .delete(`/workouts/${workout.id}`)
            .then(res => {
                setWorkout(res.data)
                props.history.push("/workouts")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {workout.map(workout => (
                <div>
                    <h3>{workout.name}</h3>
                    <p>{`Weight: ${workout.weight} lbs`}</p>
                    <p>{`Amount of Reps: ${workout.reps}`}</p>
                    <p>{`Date: ${workout.date}`}</p>
                    <p>{`Region: ${workout.region}`}</p>
                </div>
            ))}
            <button onClick={deleteWorkout}>Delete</button>
            
        </div>
    )
}

export default Workout;