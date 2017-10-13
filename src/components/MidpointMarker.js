import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

export default class MidpointMarker extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    return(
      <Marker position={{ lat: this.props.search.midpoint.latitude, lng: this.props.search.midpoint.longitude }}
      onClick={this.toggleOpen}>
        {this.state.isOpen &&
        <InfoWindow onCloseClick={this.toggleOpen}>
          <div>This is your midpoint </div>
        </InfoWindow>}
     </Marker>
    )
  }

}
