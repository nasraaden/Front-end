import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <h1>Welcome to Weightliftr</h1>
                <Link to="/signup"><button>Signup</button></Link>
                <Link to="login"><button className="login">Login</button></Link>
            </div>
        </>
    )
}

export default Home;