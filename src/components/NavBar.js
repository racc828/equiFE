import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/userHome.css';

export default class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      dropdown: false
    }
  }

    dropdownOpen = () => this.setState({dropdown: !this.state.dropdown})

  render() {
    return(
      <div className="navbar container">
        {this.props.currentUser.id ?
          <div>
            <NavLink to="/userhome">Home</NavLink>
            <NavLink to="/findfriends">Find Friends</NavLink>
            <div className="dropdown-container">
              <a onClick={this.dropdownOpen}><i className="fa fa-user"></i>
              {this.props.currentUser.fullname}<i className="fa fa-caret-down"></i></a>
              {this.state.dropdown ? <div className="dropdown-open">
                <NavLink onClick={this.dropdownOpen} to="/searchpage">Recent Searches</NavLink>
                <NavLink onClick={this.dropdownOpen} to="/savedvenues">Saved Venues</NavLink>
                <NavLink onClick={this.dropdownOpen} to="/myfriends">My Friends</NavLink>
                <a onClick={this.props.logOut}>LogOut</a>
              </div> : null }
            </div>
          </div>
        :
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">CreateAccount</NavLink>
        </div>
        }
      </div>
    )
  }




}
