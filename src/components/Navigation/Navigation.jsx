import React from "react";
import "./Navigation.css"
import {
    NavLink
} from 'react-router-dom';



const Navigation = () => {
    return (
        <nav className='navigation'>
            <p className='f3 link dim black pa3 pointer'><NavLink to="/login">Login</NavLink></p>
            <p className='f3 link dim black pa3 pointer'><NavLink to="/register">Register</NavLink></p>
        </nav>
    )
};

export default Navigation