export default class VenuesAdapter {
  static getVenues(midpoint){
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let targetUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=` + `${midpoint.latitude}` + `,` + `${midpoint.longitude}` + `&radius=8000&type=restaurant&keyword=cruise&key=AIzaSyBFRY5wL6-C7xoiMksdLkTUWySSlIBDVvI`
    return fetch(proxyUrl + targetUrl, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
  }

  static saveVenue(venue, userId) {
    return fetch('http://localhost:3000/api/v1/venues',{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        name: venue.name,
        vicinity: venue.vicinity,
        user_id: userId
      })
    })
    .then( resp => resp.json())
  }

  static getSavedVenues() {
    debugger
    return fetch('http://localhost:3000/api/v1/venues',{
      method: 'GET',
      headers: headers()
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
