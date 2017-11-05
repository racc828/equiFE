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
import FindFriends from './components/FindFriends'
import FriendsFollowed from './components/FriendsFollowed'
import Footer from './components/Footer'
import About from './components/About'
import MyProfile from './components/MyProfile'

class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      currentUser: {},
      error:false,
      userExists: false,
      dropdown: false,
      editUserExists: false,
      loggingOut: false
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
    .then( (userData) => {
      this.setState({
        currentUser: userData
      })
      localStorage.setItem('token', userData.jwt)
    })
    .then(() => {
        if(this.state.currentUser.error) {
          this.setState({error: true})
        } else {
          this.context.router.history.push("/userhome")
          this.setState({
            error:false
          })
        }
      })
  }

  resetError = () => {
    this.setState({error:false})
  }

  createUser = (user) => {
    return UsersAdapter.createUser(user)
    .then( userData => {
      if (userData.error) {
        this.setState({
          userExists:true
        })
      } else {
        this.setState({
          currentUser: userData,
          userExists:false
        })
        localStorage.setItem('token', userData.jwt)
      }
    })
    .then(() => {
      this.state.currentUser.id ? this.context.router.history.push("/userhome") : null
    })
  }

  saveEditProfile = (edits) => {
   return UsersAdapter.editUser(edits)
    .then((userData) => {
      if (userData.error) {
        this.setState({
          editUserExists:true
        })
      } else {
        this.setState({
          currentUser: userData,
          editUserExists:false
        })
      }
    })
  }

  logOut = () => {
    localStorage.token = ""
    this.setState({
      currentUser:{},
      dropdown:false
    })
    this.context.router.history.push("/")
  }

  renderSignUp = () => {
    return (
      <SignUp userExists={this.state.userExists} createUser={this.createUser} />
    )
  }

  renderLogin = () => {
    return (
      <div>
        <Login resetError={this.resetError} getUser={this.getUser} error={this.state.error} />
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

  renderMyProfile = () => {
    return (
      <MyProfile editUserExists={this.state.editUserExists} saveEditProfile={this.saveEditProfile} currentUser={this.state.currentUser} />
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

  renderFindFriends = () => {
    return(
      <FindFriends />
    )
  }

  renderAbout = () => {
    return(
      <About />
    )
  }

  renderFriendsFollowed = () => {
    return(
      <FriendsFollowed currentUser={this.state.currentUser} />
    )
  }

  dropdownOpen = () => this.setState({dropdown: !this.state.dropdown})

  reloadUserHome = () => {
    window.location.href = "/userhome"
  }

  render() {
    return (
      <div className="App">
        <div className="navigation full-pg">
          <div>
              <NavBar dropdown={this.state.dropdown} dropdownOpen={this.dropdownOpen} reloadUserHome={this.reloadUserHome} currentUser={this.state.currentUser}
              logOut={this.logOut} />
              {this.state.currentUser.error ? <Route exact path="/" render={this.renderHome}/> : <Route exact path="/" render={this.renderUserHome}/> }
              <Route exact path="/login" render={this.renderLogin}/>
              <Route exact path="/signup" render={this.renderSignUp}/>
              <Route exact path="/searchpage" render={this.renderSearchPage}/>
              <Route exact path="/userhome" render={this.renderUserHome}/>
              <Route exact path="/savedvenues" render={this.renderSavedVenues}/>
              <Route exact path="/findfriends" render={this.renderFindFriends}/>
              <Route exact path="/myfriends" render={this.renderFriendsFollowed}/>
              <Route exact path="/about" render={this.renderAbout}/>
              <Route exact path="/myprofile" render={this.renderMyProfile}/>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
