import React from "react";
import profilePicture from "../img/profile-picture.jpg";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <main> 
        <div className="div-intro">
            <h1> Karim Hafiz Portfolio!!</h1>
            <img src={profilePicture}  className="profile-practice" alt= "my profile pic"/>
            <p>My name is Karim Hafiz and I am Software Developer</p>
            <Link to ="/about">Click the link to learn more about me!</Link>            
        </div>
        </main>
    );
};

export default Home;