import React from 'react'
import FriendsListItem from './FriendsListItem'
import FollowersAdapter from '../adapters/FollowersAdapter'

export default class FriendsList extends React.Component {



  followUser = () => {
    this.props.followUser(this.props.friend)
  }

  unFollow = () => {
    let friend = {id: this.props.friend.id}
    this.props.unFollow(friend)
  }

  render() {
    return(
      <div>
        {this.props.friend.firstname}
        {this.props.friend.username}
        {this.props.followedFriends.map((friend, i) => {
          if(friend.id === this.props.friend.id) {
            return <button onClick={this.unFollow}>Unfollow</button>
          }
        })}
        {this.props.followedFriends.length == 0 ? <button onClick={this.followUser}>Follow</button> : null}
      </div>
    )
  }


}
