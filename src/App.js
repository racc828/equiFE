import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserHome from './components/UserHome';
import SessionsAdapter from './adapters/SessionsAdapter';
import UsersAdapter from './adapters/UsersAdapter';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      error:false
    }
  }

  getUser = (user) => {
    return SessionsAdapter.getUser(user)
    .then( userData => {
      localStorage.setItem('token', userData.jwt)
    })
    .then(() => {
     this.context.router.history.push("/userhome");
    })
  }

  createUser = (user) => {
    return UsersAdapter.createUser(user)
    .then( userData => {
      localStorage.setItem('token', userData.jwt)
    })
    .then(() => {
      this.context.router.history.push("/userhome")
    })
  }

  logOut = () => {
    localStorage.token = ""
    this.setState({currentUser:{}})
    this.context.router.history.push("/")
  }

  renderSignUp = () => {
    return (
      <SignUp createUser={this.createUser} />
    )
  }

  renderLogin = () => {
    return (
      <Login getUser={this.getUser} />
    )
  }

  renderUserHome = () => {
    return (
      <UserHome currentUser={this.state.currentUser} logOut={this.logOut} />
    )
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div>
              <Route exact path="/" render={this.renderLogin}/>
              <Route exact path="/signup" render={this.renderSignUp}/>
              <Route exact path="/userhome" render={this.renderUserHome}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
