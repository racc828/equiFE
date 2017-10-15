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
          this.props.followedFriends.length ===0 ?
            <div><button onClick={this.followUser} className="float-right follow-user">Follow</button></div> : this.props.followedFriends.map((friend,i) => {
              if (friend.id === this.props.friend.id) {
                return <div><button key={i} onClick={this.unFollow} className="float-right unfollow-user">UnFollow</button></div>
              } else {
                return <div><button key={i} onClick={this.followUser} className="float-right follow-user">Follow</button></div> }
            })
        }
        </div>
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
