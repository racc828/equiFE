import React from 'react'

export default class FriendFollowed extends React.Component {

  unFollow = () => {
    this.props.unFollow(this.props.friend)
  }

  setFriendInfo = () => {
    let friend = this.props.friend
    this.props.setFriendInfo(friend)
  }


  render() {
    return(
      <div className="friend-followed-container list-container">
        <a onClick={this.setFriendInfo} className="text-primary">{this.props.friend.firstname}</a>
        <button className="unfollow-user" onClick={this.unFollow}>Unfollow</button>
      </div>
    )
  }

}
