import React from 'react'

export default class FriendFollowed extends React.Component {


  unFollow = () => {
    this.props.unFollow(this.props.friend)
  }

  render() {
    return(
      <div>
        <p>{this.props.friend.firstname}
        <button className="float-right" onClick={this.unFollow}>Unfollow</button></p>
      </div>
    )
  }

}
