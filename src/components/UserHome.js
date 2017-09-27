import React from 'react'
import '../css/userHome.css';

export default class UserHome extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {}
    }
  }

  render() {
    return(
      <div id="user-home-page">
        <p>Welcome</p>
        <button onClick={this.props.logOut}>LogOut</button>
      </div>
    )
  }

}
