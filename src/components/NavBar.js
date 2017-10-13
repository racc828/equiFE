import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      {props.currentUser.id ?
        <div>
          <NavLink to="/userhome">Home</NavLink>
          <button onClick={props.logOut}>LogOut</button>
          <NavLink to="/searchpage">Recent Searches</NavLink>
          <NavLink to="/savedvenues">Saved Venues</NavLink>
          <NavLink to="/findfriends">Find Friends</NavLink>
          <NavLink to="/myfriends">My Friends</NavLink>
        </div>
      :
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">CreateAccount</NavLink>
      </div>
      }
    </div>
  );
};

export default NavBar;
