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
  }

  render() {
    return (
      <div>
        <h1 className="text-primary left">Equidestined</h1>
        <p className="text-grey">Enter two or three addresses to find the optimal meeting spot!</p>
        <form onSubmit={this.handleFormSubmit} className="left">
          {["address1", "address2", "address3"].map((address, i) => {
            return <AutoCompleteInput key={i} address={address} handleAddresses={this.handleAddresses} />
          })}
          {this.props.invalidSearch ? <div className="text-red-container"><small className="text-red">Invalid Search, please search again</small></div> : null }
          <button type="submit">Get Midpoint!</button>
        </form>
      </div>
    )
  }
}

export default AutoCompleteForm
