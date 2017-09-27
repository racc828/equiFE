import React from 'react'
import '../css/userHome.css';
import SessionsAdapter from '../adapters/SessionsAdapter';

export default class UserHome extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {}
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

  

  render() {
    debugger
    return(
      <div id="user-home-page">
        <p>Welcome {this.state.currentUser.firstname} </p>
        <button onClick={this.props.logOut}>LogOut</button>
      </div>
    )
  }

}
