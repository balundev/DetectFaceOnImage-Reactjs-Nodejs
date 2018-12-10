import React from "react";
import {NavLink} from "react-router-dom";



class RegisterForm extends React.Component{

    render() {
        return (
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
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Repeat password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="password" name="passwordRepeat" id="passwordRepeat"/>
                                </div>
                            </fieldset>
                            <div >
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                       type="submit" value="Sign in"/>
                            </div>
                            <div className="lh-copy mt3">
                                Already got accout?
                                <NavLink className="f6 link dim black db" to="/login">Login</NavLink>
                            </div>
                        </form>
                    </main>
                </article>
        );
    }
}

export default RegisterForm