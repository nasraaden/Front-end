import React from "react";

import { Link } from "react-router-dom";

const WorkoutCard = ({workout}) => {
    return (
        <div>
            <Link to={`/workout/ ${workout.id}`}>
            <p>{workout.name}</p>
            </Link>
            
        </div>
    )
}

export default WorkoutCard;