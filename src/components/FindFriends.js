import React from 'react'
import FindFriendsForm from './FindFriendsForm'
import FriendsList from './FriendsList'
import UsersAdapter from '../adapters/UsersAdapter'

export default class FindFriends extends React.Component {
  constructor() {
    super()
    this.state = {
      matchedFriends: []
    }
  }

  findFriends = (friend) => {
    UsersAdapter.findFriends(friend)
    .then(matchedFriends => {
      this.setState({matchedFriends})
    })
  }

  render(){
    return(
      <div>
        <FindFriendsForm findFriends={this.findFriends} />
        <FriendsList matchedFriends={this.state.matchedFriends} />
      </div>
    )
  }



}
