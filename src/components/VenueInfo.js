import React from 'react';
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class VenueInfo extends React.Component {

  saveVenue = () => {
    VenuesAdapter.saveVenue(this.props.venue, this.props.currentUser.id)
  }

  render(){
    return(
      <div className="venueInfo">
        <p><span><img className="map-marker" src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"/></span>{this.props.venue.name}: {this.props.venue.vicinity}</p>
        { this.props.currentUser !== undefined ? <button onClick={this.saveVenue}>Save</button> : null
        }
      </div>
    )
  }
}
