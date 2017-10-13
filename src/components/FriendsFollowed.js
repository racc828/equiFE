import React from 'react'
import FriendFollowed from './FriendFollowed'
import FollowersAdapter from '../adapters/FollowersAdapter'

export default class FriendsFollowed extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    FollowersAdapter.myFriends()
    .then(friends => {this.setState({friends})})
  }

  unFollow = (friend) => {
    debugger
    FollowersAdapter.unFollowFriend(friend)
    .then(friends => {this.setState({friends})})
  }

  render() {
    return(
      <div>
        {this.state.friends.map((friend,i) => {
          return <FriendFollowed unFollow={this.unFollow} friend={friend} key={i} />
        })}
      </div>
    )
  }

}
