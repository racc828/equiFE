import React from 'react';
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class VenueInfo extends React.Component {

  saveVenue = () => {
    debugger
    VenuesAdapter.saveVenue(this.props.venue, this.props.currentUser.id)
  }

  render(){
    return(
      <div className="venueInfo">
        {this.props.venue.name}
        <button onClick={this.saveVenue}>Save Venue</button>
      </div>
    )
  }
}
