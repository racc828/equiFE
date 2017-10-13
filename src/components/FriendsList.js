import React from 'react'
import FriendsListItem from './FriendsListItem'

const FriendsList = (props) => {
    return(
      <div>
        {props.matchedFriends.map((friend, i) => {
          return <FriendsListItem friend={friend} key={i} />
        })}
      </div>
    )
  }

  export default FriendsList
