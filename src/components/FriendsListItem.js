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
        <div className="list-container">
        <p>{this.props.friend.username} </p>
        {
          this.props.followedFriends.length > 0 && this.props.followedFriends.find(friend => friend.id === this.props.friend.id) ? <div><button onClick={this.unFollow} className="float-right unfollow-user">UnFollow</button></div> : <div><button onClick={this.followUser} className="float-right follow-user">Follow</button></div>
        }
        </div>
      </div>
    )
  }
}
