import React from "react";
import Particles from 'react-particles-js';
import RegisterForm from "./RegisterForm.jsx";


const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

const Register = ({login, loadUser}) => {
    return (
        <div>
            <Particles className="particles" params={particlesOptions}/>
            <RegisterForm login={login} loadUser={loadUser}/>
        </div>
    )
};

export default Register