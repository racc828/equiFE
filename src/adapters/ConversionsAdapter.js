const path = 'https://equidestined-be.herokuapp.com/api/v1/conversions/create_conversion'
export default class ConversionsAdapter {

  static makeConversion(latitude, longitude){
    return fetch('https://equidestined-be.herokuapp.com/api/v1/conversions/create_conversion', {
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
