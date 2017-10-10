const path = 'http://localhost:3000/api/v1/searches'
export default class SearchesAdapter {

  static makeSearch(addresses) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(addresses)
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
