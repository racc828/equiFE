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
      <div>
        <Marker position={{ lat: this.props.venue.geometry.location.lat, lng: this.props.venue.geometry.location.lng }} onClick={this.toggleOpen}
        icon={{
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }}
          >
          {this.state.isOpen &&
          <InfoWindow onCloseClick={this.toggleOpen}>
            <div>
              <p><span>Name: </span>  {this.props.venue.name} </p>
              <p><span>Address: </span> {this.props.venue.vicinity}</p>
              <p> {this.props.venue.opening_hours.open_now ? <span className="green">Open Now</span> : <span className="red">Closed</span> } </p>
              <p> <span>Rating:</span> {this.props.venue.rating} </p>
            </div>
          </InfoWindow>}
        </Marker>
      </div>
    )
  }

}
