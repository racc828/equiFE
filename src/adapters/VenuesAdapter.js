export default class VenuesAdapter {


  static getVenues(midpoint){
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let targetUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=` + `${midpoint.latitude}` + `,` + `${midpoint.longitude}` + `&radius=10000&type=restaurant&keyword=cruise&key=AIzaSyBFRY5wL6-C7xoiMksdLkTUWySSlIBDVvI`
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

}
