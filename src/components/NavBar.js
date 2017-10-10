import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="navbar">
      {props.currentUser.id ?
      <button onClick={props.logOut}>LogOut</button>
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
