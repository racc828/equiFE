import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import ConversionsAdapter from '../adapters/ConversionsAdapter'

class AutoCompleteInput extends React.Component {
  constructor() {
    super()
    this.state = {
      address:""
    }
  }

  handleChange = (address) => {
    let key = this.props.address
    this.props.handleAddresses(key, address)
    this.setState({
      address
    })
  }

  getLocation = () => {
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(this.currPositionCoordinates))
    } else {
      console.log("Geolocator is not working")
    }
  }

  currPositionCoordinates = (position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    ConversionsAdapter.makeConversion(latitude, longitude)
    .then(data => {this.setState({
      address: data.address
    })})
  }

  render() {
    const inputProps = {
      value:this.state.address,
      onChange: this.handleChange,
      placeholder: "Enter a location"
    }

    return (
      <div className="left auto-complete-form">
        <label>Address</label>
        <PlacesAutocomplete inputProps={inputProps} />
        {this.props.address === "address1" ? <button type="button" className="current-location" onClick={this.getLocation}><i className="fa fa-map-marker"></i></button> : null}
      </div>

    )
  }
}

export default AutoCompleteInput
