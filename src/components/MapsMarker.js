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
        <Marker position={{ lat: this.props.venue.coordinates.latitude, lng: this.props.venue.coordinates.longitude }} onClick={this.toggleOpen}
        icon={{
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }}
          >
          {this.state.isOpen &&
          <InfoWindow onCloseClick={this.toggleOpen}>
            <div>
              <img src={this.props.venue.image_url} width={150}></img>
              <p><span></span>  <a href={this.props.venue.url} target="_blank">{this.props.venue.name}</a> </p>
              <p> {this.props.venue.is_closed ? <span className="red">Closed</span> : <span className="green">Open Now</span> } </p>
              <p> <span>Rating:</span> {this.props.venue.rating} </p>
              <p> <span>Price:</span> {this.props.venue.price} </p>

            </div>
          </InfoWindow>}
        </Marker>
      </div>
    )
  }

}
