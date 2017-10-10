const path = 'http://localhost:3000/api/v1/searches'
export default class SearchesAdapter {

  static makeSearch(addresses) {
    debugger
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(addresses)
    })
    .then( resp => resp.json())
  }
}

let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
