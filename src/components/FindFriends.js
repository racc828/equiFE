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
      friends: [],
      invalidSearch: false
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
      if (matchedFriends.length === 0) {
        this.setState({
          invalidSearch:true
        })
      } else {
        this.setState({
          matchedFriends: matchedFriends,
          invalidSearch: false
        })
      }
    })
  }

  followUser = (friend) => {
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
      <div className="white-box-outer">
        <div className="white-box-inner">
          <FindFriendsForm findFriends={this.findFriends} />
          {this.state.invalidSearch ?
          <div>
            <p>No accounts found</p>
          </div> : <FriendsList friends={this.state.friends}
            unFollow={this.unFollow} followUser={this.followUser} matchedFriends={this.state.matchedFriends} /> }
        </div>
      </div>
    )
  }



}
