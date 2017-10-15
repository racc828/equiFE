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
    FollowersAdapter.unFollowFriend(friend)
    .then(friends => {this.setState({friends})})
  }

  render() {
    return(
      <div className="white-box-outer">
        <div className="white-box-inner">
          <h1 className="text-primary">My Friends</h1>
          {this.state.friends.map((friend,i) => {
            return <FriendFollowed unFollow={this.unFollow} friend={friend} key={i} />
          })}
        </div>
      </div>
    )
  }

}
