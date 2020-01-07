import React from "react";

import { Link } from "react-router-dom";

const WorkoutCard = ({workout}) => {
    return (
        <div className="workout">
            <Link to={`/workouts/${workout.id}`}>
                <p>{workout.name}</p>
            </Link>
        </div>
    )
}

export default WorkoutCard;