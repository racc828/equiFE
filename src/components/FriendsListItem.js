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
        <p>
        {this.props.friend.username}
        {
          this.props.followedFriends.length ===0 ?
            <button onClick={this.followUser} className="float-right">Follow</button> : this.props.followedFriends.map((friend,i) => {
              if (friend.id === this.props.friend.id) {
                return <button onClick={this.unFollow} className="float-right">UnFollow</button>
              } else {
                return <button onClick={this.followUser} className="float-right">Follow</button>
              }
            })
        }
        </p>
      </div>
    )
  }


}


//  {if(this.props.followedFriends.length === 0) {
//   return <button onClick={this.followUser}>Follow</button>
// } else {
//   this.props.followedFriends.map((friend,i ) => {
//     if (friend.id == this.props.friend.id) {
//       return <button onClick={this.unFollow}>UnFollow</button>
//     } else {
//       return <button return <button onClick={this.followUser}>Follow</button>
//     }
//   })
// }
// }
