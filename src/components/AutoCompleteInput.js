import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import ConversionsAdapter from '../adapters/ConversionsAdapter'

class AutoCompleteInput extends React.Component {
  constructor() {
    super()
    this.state = {
      address:"",
      inputLoading: false
    }
  }

  handleChange = (address) => {
    let key = this.props.address
    this.props.handleAddresses(key, address)
    this.setState({
      address
    })
  }

  // This submits form on enter because AutoComplete prevents that
  checkEnter = (e) => {
    let autoCompleteDropdown = document.getElementById("PlacesAutocomplete__autocomplete-container")
    if(e.keyCode == 13 && autoCompleteDropdown == null) {
      this.props.handleFormSubmit(e)
    }
  }

  getLocation = () => {
    this.setState({inputLoading:true})
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(this.currPositionCoordinates))
    } else {
      console.log("Geolocator is not working")
    }
  }

  currPositionCoordinates = (position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let key = this.props.address
    ConversionsAdapter.makeConversion(latitude, longitude)
    .then(data => {
      this.setState({
        address: data.address,
        inputLoading: false
      })
      this.props.handleAddresses(key, data.address)
    })
  }

  render() {
    const inputProps = {
      value:this.state.address,
      onChange: this.handleChange,
      placeholder: "Enter a location",
      onKeyDown: this.checkEnter
    }

    return (
      <div className="left auto-complete-form">
        <label>Address</label>
        {this.state.inputLoading ? <input className="input-loading" value="" /> : <PlacesAutocomplete inputProps={inputProps} />  }
        {this.props.address === "address1" ? <button type="button" className="current-location" onClick={this.getLocation}><i className="fa fa-map-marker"></i></button> : <div className="hide">""</div>}
      </div>

    )
  }
}

export default AutoCompleteInput
