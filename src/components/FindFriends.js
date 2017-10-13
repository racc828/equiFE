import React from 'react'
import FindFriendsForm from './FindFriendsForm'
import FriendsList from './FriendsList'
import UsersAdapter from '../adapters/UsersAdapter'
import FollowersAdapter from '../adapters/FollowersAdapter'

export default class FindFriends extends React.Component {
  constructor() {
    super()
    this.state = {
      matchedFriends: [],
      friends: []
    }
  }

  componentDidMount() {
    FollowersAdapter.myFriends()
    .then(friends => {this.setState({friends})})
  }

  componentWillReceiveProps() {
    FollowersAdapter.myFriends()
    .then(friends => {this.setState({friends})})
  }

  findFriends = (friend) => {
    UsersAdapter.findFriends(friend)
    .then(matchedFriends => {
      this.setState({matchedFriends})
    })
  }

  followUser = (friend) => {
    debugger
    FollowersAdapter.followUser(friend)
    .then(friend => {
      this.setState({
        friends: [...this.state.friends, friend]
      })
    })
  }

  unFollow = (friend) => {
    FollowersAdapter.unFollowFriend(friend)
    .then(friends => {this.setState({friends})})
  }

  render(){
    return(
      <div>
        <FindFriendsForm findFriends={this.findFriends} />
        <FriendsList friends={this.state.friends}
          unFollow={this.unFollow} followUser={this.followUser} matchedFriends={this.state.matchedFriends} />
      </div>
    )
  }



}
