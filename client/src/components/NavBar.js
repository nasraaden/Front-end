import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <div className="nav-bar">
            <div>
                <h2>WEIGHTLIFTR</h2>
            </div>
            {/* <div className="nav-links">
                <Link to="/home"><a href="#">Home</a></Link>
            </div> */}
        </div>
    )
}

export default NavBar;