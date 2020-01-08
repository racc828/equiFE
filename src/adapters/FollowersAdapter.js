const path = 'https://equidestined-be.herokuapp.com/api/v1/follows'
export default class FollowersAdapter {

  static followUser(user) {
    return fetch('https://equidestined-be.herokuapp.com/api/v1/follows/follow_user',{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        following_id: user.id
      })
    })
    .then( resp => resp.json())
  }

  static unFollowFriend(friend){
    return fetch('https://equidestined-be.herokuapp.com/api/v1/follows/unfollow_friend',{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        user_id: friend.id
      })
    })
    .then( resp => resp.json())
  }

  static myFriends() {
    return fetch('https://equidestined-be.herokuapp.com/api/v1/follows/my_friends',{
      method: 'POST',
      headers: headers()
    })
    .then( resp => resp.json())
  }

  static setFriendInfo(friend) {
    return fetch('https://equidestined-be.herokuapp.com/api/v1/follows/get_friend_info',{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        friend_id: friend.id
      })
    })
    .then( resp => resp.json())
  }


}


let headers = () => {
  const token = localStorage.getItem('token')
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}
