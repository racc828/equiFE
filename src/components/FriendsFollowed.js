import React from 'react'
import FriendFollowed from './FriendFollowed'
import FriendInfoPage from './FriendInfoPage'
import FollowersAdapter from '../adapters/FollowersAdapter'

export default class FriendsFollowed extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      friendActive: false,
      friendInfo: {}
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

  setFriendInfo = (friend) => {
    FollowersAdapter.setFriendInfo(friend)
    .then((data) => {this.setState({
      friendInfo: data,
      friendActive:true
    })})
  }

  resetActiveFriend = () => {
    this.setState({
      friendActive:false,
      friendInfo: {}
    })
  }

  render() {
    return(
      <div className="white-box-outer">
        <div className="white-box-inner">
          {this.state.friendActive ?
            <div>
              <FriendInfoPage resetActiveFriend={this.resetActiveFriend} friendInfo={this.state.friendInfo} />
            </div> :
            <div>
              <h1 className="text-primary">My Friends</h1>
              {this.state.friends.map((friend,i) => {
                return <FriendFollowed setFriendInfo={this.setFriendInfo} unFollow={this.unFollow} friend={friend} key={i} />
              })}
            </div> }

        </div>
      </div>
    )
  }

}
