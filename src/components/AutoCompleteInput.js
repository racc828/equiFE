import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class AutoCompleteInput extends React.Component {
  constructor() {
    super()
    this.state = {
      address:""
    }
  }

  handleChange = (address) => {
    let key = this.props.address
    this.props.newState(key, address)
    this.setState({
      address
    })
  }

  render() {
    const inputProps = {
      value:this.state.address,
      onChange: this.handleChange,
      placeholder: "Enter a location"
    }

    return (
      <div>
        <PlacesAutocomplete inputProps={inputProps} />
      </div>

    )
  }
}

export default AutoCompleteInput
