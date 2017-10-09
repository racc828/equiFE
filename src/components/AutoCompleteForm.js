import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {getCenter} from 'geolib'
import AutoCompleteInput from './AutoCompleteInput'


class AutoCompleteForm extends React.Component {
  constructor() {
    super()
    this.state = {
      address1: "",
      address2: "",
      address3: ""
    }
  }

  handleAddresses = (key, address) => {
    this.setState({
      [key]: address
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    let search = this.state
    this.props.makeSearch(search)
    .then(() => {
      this.props.initiateSearch()
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
