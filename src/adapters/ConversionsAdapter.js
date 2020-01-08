const path = 'https://equidestined-be.herokuapp.com/api/V1/conversions'
export default class ConversionsAdapter {

  static makeConversion(latitude, longitude){
    return fetch(`${path}/create_conversion`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude
      })
    })
    .then(resp => resp.json())
  }

}

let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
