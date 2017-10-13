import React from 'react';
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class VenueInfo extends React.Component {

  saveVenue = () => {
    debugger
    VenuesAdapter.saveVenue(this.props.venue, this.props.currentUser.id)
  }

  render(){
    debugger
    return(
      <div className="venueInfo">
        {this.props.venue.name} : {this.props.venue.vicinity}
        { this.props.currentUser !== undefined ? <button onClick={this.saveVenue}>Save Venue</button> : null
        }
      </div>
    )
  }
}
