import React, {Component} from 'react';
import './App.css';
import HomePage from "./components/HomePage/HomePage.jsx"

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import Signin from "./components/Signin/Signin.jsx";
import Register from "./components/Register/Register.jsx";

class App extends Component {
    constructor(){
        super();
        this.state = {
            isLogged : false,
            user: {
                id: '',
                name: '',
                email: '',
                entries: 'unranked',
                joined: new Date()
            }
        }
    }
    loadUser = (user) =>{
        this.setState({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                entries: user.entries,
                joined: user.joined
            }
        })
    };
    handleLogin =()=>{
        this.setState({
            isLogged : true
        })
    };
    handleLogout =()=>{
        this.setState({
            isLogged: false,
            user: {
                id: '',
                name: '',
                email: '',
                entries: 'unranked',
                joined: new Date()
            }
        })
    };
    render() {
        const MyHomePage =()=>{
            return <HomePage isLogged={this.state.isLogged} logOut={this.handleLogout} userId={this.state.user.id} name={this.state.user.name} entries={this.state.user.entries}/>
        };
        const Login =()=>{
            return <Signin login={this.handleLogin} loadUser={this.loadUser}/>
        };
        const MyRegister =()=>{
            return <Register login={this.handleLogin} loadUser={this.loadUser}/>
        };
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={MyHomePage}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={MyRegister}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
