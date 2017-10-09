import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {geoLib, getCenter} from 'geolib'
import AutoCompleteInput from './AutoCompleteInput'

class AutoCompleteForm extends React.Component {
  constructor() {
    super()
    this.state = {
      address1: "",
      address2: "",
      address3: "",
      coordinates: [],
      center: []
    }
  }

  newState = (key, address) => {
    this.setState({
      [key]: address
    })
  }

  calculateMidpoint = (locations) => {
    geoLib.getCenter(locations)
    .then(() => {
      debugger
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    let locationsArray = [this.state.address1, this.state.address2, this.state.address3]
    locationsArray.map((address, i) => {
      geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coords => this.setState({
        coordinates: [...this.state.coordinates, coords]
       }))
       .then(() => {
         this.calculateMidpoint(this.state.coordinates)
       })
    })
  }



  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        {["address1", "address2", "address3"].map((address, i) => {
          return <AutoCompleteInput key={i} address={address} newState={this.newState} />
        })}
        <button type="submit">Submit </button>
      </form>
    )
  }
}

export default AutoCompleteForm
