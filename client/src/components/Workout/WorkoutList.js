import React, {useState, useEffect} from "react";
import axios from "axios";

const workouts = [
    {
        id: 1,
        name: "bench press",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 2,
        name: "squat",
        weight: "185",
        reps: "10",
        date: "2019-12-31",
        region: "chest"
    },
    {
        id: 3,
        name: "bench press",
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
    console.log(workout);

return (
    <div>

        {workout.map(workOut => {
            return(
                <WorkoutCard key={workOut.id} workout={workOut} />
            )}
        )}
    </div>
)
}

export default WorkoutList;

export {workouts};


// This is where you map over WorkoutCard to display the data that is being shown. 
