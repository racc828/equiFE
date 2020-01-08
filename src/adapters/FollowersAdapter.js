const path = 'https://equidestined-be.herokuapp.com/api/V1/follows'
export default class FollowersAdapter {

  static followUser(user) {
    return fetch(`${path}/follow_user`,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        following_id: user.id
      })
    })
    .then( resp => resp.json())
  }

  static unFollowFriend(friend){
    return fetch(`${path}/unfollow_friend`,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        user_id: friend.id
      })
    })
    .then( resp => resp.json())
  }

  static myFriends() {
    return fetch(`${path}/my_friends`,{
      method: 'POST',
      headers: headers()
    })
    .then( resp => resp.json())
  }

  static setFriendInfo(friend) {
    return fetch(`${path}/get_friend_info`,{
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
