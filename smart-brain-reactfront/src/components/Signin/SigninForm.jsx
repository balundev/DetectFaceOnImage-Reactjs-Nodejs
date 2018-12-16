import React from "react";
import {NavLink,withRouter} from "react-router-dom";

class SigninForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loginEmail: '',
            loginPassword: '',
            message: ''
        }
    }
    handleLogin = (e)=>{
        this.setState({
            loginEmail: e.target.value
        })
    };
    handlePassword = (e)=>{
        this.setState({
            loginPassword: e.target.value
        })
    };
    handleLoginSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/signin/",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPassword
            })
        })
         .then(response => response.json())
         .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.history.push('/');
                this.props.login();
            }else {
                this.setState({
                    loginEmail: '',
                    loginPassword: '',
                    message: 'Wrong email adress or password'
                },()=>{
                    this.props.history.push('/login');
                });
            }
         });

    };

    render() {
        return (
            <div>
                <article className="br3 ba dark-gray b--black-10 mv4 m-100 w-50-m w-25-1 shadow-5 mw6 center">
                    <main className="pa4 black-80">
                        <form className="measure" >
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email" name="email" id="email-address" value={this.state.loginEmail} onChange={this.handleLogin}/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password" name="password" id="password" value={this.state.loginPassword} onChange={this.handlePassword}/>
                                </div>
                            </fieldset>
                            <div>
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                       type="submit" value="Sign in" onClick={this.handleLoginSubmit}/>
                                <span>{this.state.message}</span>
                            </div>
                            <div className="lh-copy mt3">
                                <NavLink className="f6 link dim black db" to="/register">Register</NavLink>
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}
export default withRouter(SigninForm)