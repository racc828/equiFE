const path = 'http://localhost:3000/api/v1/users'

export default class UsersAdapter {

  static createUser(user) {
    return fetch(path, {
      method: 'post',
      headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then( resp => resp.json())
    localStorage.setItem('token', user.jwt)
  }

  static findFriends(friend) {
    return fetch('http://localhost:3000/api/v1/users/find_friends', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        firstname: friend
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
