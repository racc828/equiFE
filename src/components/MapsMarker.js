import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

export default class MapsMarker extends React.Component {
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
      <Marker position={{ lat: this.props.venue.geometry.location.lat, lng: this.props.venue.geometry.location.lng }} onClick={this.toggleOpen}
      icon={{
        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      }}
        >
        {this.state.isOpen &&
        <InfoWindow onCloseClick={this.toggleOpen}>
          <div>
            <span>{this.props.venue.name} </span>
            <span>{this.props.venue.vicinity} </span>
          </div>
        </InfoWindow>}
      </Marker>
    )
  }

}
