import React from 'react'

export default class FriendFollowed extends React.Component {


  unFollow = () => {
    this.props.unFollow(this.props.friend)
  }

  render() {
    return(
      <div>
        {this.props.friend.firstname}
        <button onClick={this.unFollow}>Unfollow</button>
      </div>
    )
  }

}
