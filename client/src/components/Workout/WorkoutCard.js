import React from "react";

import { Link } from "react-router-dom";

const WorkoutCard = ({workout}) => {

    return (
        <div className="workout">
            
                {/* <p>{workout.name}</p> */}
                    <p>{workout.name}</p>
                    <Link to={`/workouts/${workout.id}`}>
                        <button className="update-button">Update</button>
                    </Link>
        </div>
    )
}

export default WorkoutCard;