import React from "react";
import {NavLink,withRouter} from "react-router-dom";



class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            secondPassword: '',
            name: '',
            message: ''
        }
    }
    handleEmail = (e)=>{
        this.setState({
            email: e.target.value
        })
    };
    handleName = (e)=>{
        this.setState({
            name: e.target.value
        })
    };
    handlePassword = (e)=>{
        this.setState({
            password: e.target.value
        })
    };
    handlePasswordRepeat = (e)=>{
        this.setState({
            secondPassword: e.target.value
        })
    };

    handleLoginSubmit = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.secondPassword) {
            fetch("http://localhost:3000/register/", {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                })
            })
                .then(response => response.json())
                .then(user => {
                    if (user) {
                        this.props.history.push('/');
                        this.props.loadUser(user);
                        this.props.login();
                    }
                });
        }else{
            this.setState({
                message: "Please insert same passwords",
                email: '',
                password: '',
                secondPassword: '',
                name: ''
            },()=>{
                this.props.history.push('/register');
            })

        }
    };
    render() {
        return (
                <article className="br3 ba dark-gray b--black-10 mv4 m-100 w-50-m w-25-1 shadow-5 mw6 center">
                    <main className="pa4 black-80">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                                <p>{this.state.message}</p>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="email" value={this.state.email} onChange={this.handleEmail} name="email-address" id="email-address"/>
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="text" value={this.state.name} onChange={this.handleName} name="name" id="name"/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="password" value={this.state.password} onChange={this.handlePassword} name="password" id="password"/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Repeat password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="password" value={this.state.secondPassword} onChange={this.handlePasswordRepeat} name="passwordRepeat" id="passwordRepeat"/>
                                </div>
                            </fieldset>
                            <div >
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                       type="submit" onClick={this.handleLoginSubmit} value="Sign in"/>
                            </div>
                            <div className="lh-copy mt3">
                                Already got accout?
                                <NavLink className="f6 link dim black db" to="/login"><strong>Login</strong></NavLink>
                            </div>
                        </form>
                    </main>
                </article>
        );
    }
}

export default withRouter(RegisterForm)