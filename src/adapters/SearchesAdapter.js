const path = 'https://equidestined-be.herokuapp.com/api/V1/searches'
export default class SearchesAdapter {

  static makeSearch(addresses) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(addresses)
    })
    .then( resp => resp.json())
  }

  static getUserSearches() {
    return fetch(`${path}/get_user_searches`, {
      method: 'POST',
      headers:headers()
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
