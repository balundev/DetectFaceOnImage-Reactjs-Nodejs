import React from "react";
import "./Navigation.css"
import {
    NavLink
} from 'react-router-dom';



class Navigation extends React.Component{
    constructor(props){
        super(props)
    }
    handleLogout=()=>{
        this.props.logOut();
    };
    render() {
        if(this.props.isLogged === false){
            return (
                <nav className='navigation'>
                    <p className='f3 link dim black pa3 pointer'><NavLink to="/login">Login</NavLink></p>
                    <p className='f3 link dim black pa3 pointer'><NavLink to="/register">Register</NavLink></p>
                </nav>
            )
        }else {
            return (
                <nav className='navigation'>
                    <p className='f3 link dim black pa3 pointer' onClick={this.handleLogout}><NavLink to="/">Log Out</NavLink></p>
                </nav>
            )
        }
    }
}

export default Navigation