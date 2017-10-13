import React from 'react'
import FriendsListItem from './FriendsListItem'
import FollowersAdapter from '../adapters/FollowersAdapter'

export default class FriendsList extends React.Component {
  constructor() {
    super()

  }

  followUser = () => {
    FollowersAdapter.followUser(this.props.friend)
  }

  render() {
    return(
      <div>
        {this.props.friend.firstname}
        {this.props.friend.username}
        <button onClick={this.followUser}>Follow</button>
      </div>
    )
  }


}
