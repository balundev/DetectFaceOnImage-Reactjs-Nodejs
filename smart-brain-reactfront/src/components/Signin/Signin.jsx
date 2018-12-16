import React from "react";
import Particles from 'react-particles-js';
import SigninForm from "./SigninForm.jsx";


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

class Signin extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Particles className="particles" params={particlesOptions}/>
                <SigninForm login={this.props.login} loadUser={this.props.loadUser}/>
            </div>
        );
    }
}

export default Signin