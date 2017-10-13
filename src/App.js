import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserHome from './components/UserHome';
import SearchPage from './components/SearchPage';
import Home from './components/Home';
import SessionsAdapter from './adapters/SessionsAdapter';
import UsersAdapter from './adapters/UsersAdapter';
import './App.css';
import PropTypes from 'prop-types'
import NavBar from './components/NavBar'
import Map from './components/Map'
import SavedVenues from './components/SavedVenues'

class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      currentUser: {},
      error:false
    }
  }

  componentDidMount(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
    }

  componentWillReceiveProps(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
    }

  getUser = (user) => {
    return SessionsAdapter.getUser(user)
    .then( (userData) => { debugger
      this.setState({
        currentUser: userData
      })
      localStorage.setItem('token', userData.jwt)
    })
    .then(() => {
        this.state.currentUser.error ? this.setState({error: true}) : this.context.router.history.push("/userhome");
      })
  }

  resetError = () => {
    this.setState({error:false})
  }

  createUser = (user) => {
    return UsersAdapter.createUser(user)
    .then( userData => {
      this.setState({
        currentUser: userData
      })
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
      <div>
        <Login resetError={this.resetError} getUser={this.getUser} />
        {this.state.error ? <span className="error"><small>Invalid Login Credentials</small> </span> : null}
      </div>
    )
  }

  renderHome = () => {
    return (
      <Home renderMap={this.renderMap} />
    )
  }


  renderUserHome = () => {
    return (
      <UserHome currentUser={this.state.currentUser} />
    )
  }

  renderSearchPage = () => {
    return (
      <SearchPage currentUser={this.state.currentUser} />
    )
  }

  renderSavedVenues = () => {
    return(
      <SavedVenues currentUser={this.state.currentUser} />
    )
  }

  reloadUserHome = () => {
    window.location.href = "/userhome"
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div>
              <NavBar reloadUserHome={this.reloadUserHome} currentUser={this.state.currentUser}
              logOut={this.logOut} />
              <Route exact path="/" render={this.renderHome}/>
              <Route exact path="/login" render={this.renderLogin}/>
              <Route exact path="/signup" render={this.renderSignUp}/>
              <Route exact path="/searchpage" render={this.renderSearchPage}/>
              <Route exact path="/userhome" render={this.renderUserHome}/>
              <Route exact path="/savedvenues" render={this.renderSavedVenues}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
