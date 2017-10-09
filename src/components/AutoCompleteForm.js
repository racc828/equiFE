import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {getCenter} from 'geolib'
import AutoCompleteInput from './AutoCompleteInput'
import SearchesAdapter from '../adapters/SearchesAdapter'

class AutoCompleteForm extends React.Component {
  constructor() {
    super()
    this.state = {
      address1: "",
      address2: "",
      address3: "",
      addressesArray: [],
      center:[]
    }
  }

  handleAddresses = (key, address) => {
    this.setState({
      [key]: address
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    SearchesAdapter.makeSearch(this.state)
    .then(addresses => {
     let addressArray = addresses.map((addressArr) => {
        return {"lat": addressArr.latitude, "lng": addressArr.longitude}
      })
     let midpoint = getCenter(addressArray)
     this.setState({
       center: midpoint,
       addressesArray: addressArray
     })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        {["address1", "address2", "address3"].map((address, i) => {
          return <AutoCompleteInput key={i} address={address} handleAddresses={this.handleAddresses} />
        })}
        <button type="submit">Submit </button>
      </form>
    )
  }
}

export default AutoCompleteForm
