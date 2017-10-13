const path = 'http://localhost:3000/api/v1/follows'
export default class FollowersAdapter {

  static followUser(user) {
    debugger
    return fetch('http://localhost:3000/api/v1/follows/follow_user',{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        following_id: user.id
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
