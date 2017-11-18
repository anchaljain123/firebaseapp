import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Signup from './signUp'
import Login from './login'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Dashboard from './dashboard'


const config = {
    apiKey: "AIzaSyAWboNwkMXtJqNY5pJc02U7cS725W87xSY",
    authDomain: "fir-session-7ade3.firebaseapp.com",
    databaseURL: "https://fir-session-7ade3.firebaseio.com",
    projectId: "fir-session-7ade3",
    storageBucket: "fir-session-7ade3.appspot.com",
    messagingSenderId: "304537599758"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Firebase Session</h1>
        </header>
          <Router>
              <Switch>
              <Route exact path='/' component={Signup}/>
              <Route  exact path="/login" component={Login}/>
              <Route  exact path="/dashboard" component={Dashboard}/>
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
