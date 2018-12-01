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

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/login' component={Signin}/>
                    <Route exact path='/register' component={Register}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
