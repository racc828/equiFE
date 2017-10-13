import React from 'react';
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class SavedVenue extends React.Component {

  render(){
    return(
      <div className="venueInfo">
        {this.props.venue.name}
      </div>
    )
  }
}
