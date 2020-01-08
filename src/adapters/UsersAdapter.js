const path = 'https://equidestined-be.herokuapp.com/api/V1/users'

export default class UsersAdapter {

  static createUser(user) {
    debugger
    return fetch(path, {
      method: 'post',
      headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          firstname: user.user.firstname,
          lastname: user.user.lastname,
          email: user.user.email,
          username: user.user.username,
          password: user.user.password,
          fullname: user.user.firstname + " " + user.user.lastname
        }

      })
    })
    .then( resp => resp.json())
    localStorage.setItem('token', user.jwt)
  }

  static editUser(edits) {
    return fetch(`${path}/${edits.id}`, {
      method: 'PATCH',
      headers:headers(),
      body: JSON.stringify({
        firstname: edits.firstname,
        lastname: edits.lastname,
        email: edits.email,
        username: edits.username,
        fullname: edits.firstname + " " + edits.lastname
      })
    })
    .then( resp => resp.json())
  }

  static findFriends(friend) {
    return fetch('${path}/find_friends', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        fullname: friend
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
