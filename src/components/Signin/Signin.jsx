import React from "react";
import Particles from 'react-particles-js';
import {
    NavLink
} from 'react-router-dom';


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

const Signin = () => {
    return (
        <div>
        <Particles className="particles" params={particlesOptions}/>
        <article className="br3 ba dark-gray b--black-10 mv4 m-100 w-50-m w-25-1 shadow-5 mw6 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                   type="email" name="email-address" id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                   type="password" name="password" id="password"/>
                        </div>
                    </fieldset>
                    <div >
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                               type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                        <NavLink className="f6 link dim black db" to="/register">Register</NavLink>
                    </div>
                </form>
            </main>
        </article>
        </div>
    )
};

export default Signin