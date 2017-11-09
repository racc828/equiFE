export default class VenuesAdapter {
  static getVenues(midpoint){
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    // Search radius starts out at 402 meters (~0.25 miles), though we should have it widen as needed (like what Sarah did)
    //https://www.yelp.com/developers/documentation/v3/business_search
    let targetUrl = `https://api.yelp.com/v3/businesses/search?sort_by=rating&radius=402&term=restaurant&latitude=` + `${midpoint.latitude}` + `&` + `longitude=` + `${midpoint.longitude}`
    return fetch(proxyUrl + targetUrl, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer rLPRBJT0E3PEHWmA4apfQYxpNjMSXieA7rJGPlDNmcJnQBVlSn_x7ncSn_0iDiYa-zdYff42QZU5T6dXZc1HolXUqr1TTkmefxwyktHmp9YaLdBubarI9yDKoqT4WXYx",
        "Token-Type": "bearer"
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
        url: venue.url,
        street: venue.location.display_address[0],
        city: venue.location.display_address[1],
        rating: venue.rating,
        user_id: userId
      })
    })
    .then( resp => resp.json())
  }

  static getSavedVenues() {
    return fetch('http://localhost:3000/api/v1/venues',{
      method: 'GET',
      headers: headers()
    })
    .then( resp => resp.json())
  }

  static deleteVenue(venue) {
    return fetch(`http://localhost:3000/api/v1/venues/${venue}`,{
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({
        id: venue
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
