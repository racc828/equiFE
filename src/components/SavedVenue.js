import React from 'react';
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class SavedVenue extends React.Component {


  deleteVenue = () => {
    debugger
    this.props.deleteVenue(this.props.venue.id)
  }

  render(){
    return(
      <div className="venueInfo">
        <p>{this.props.venue.name} <i onClick={this.deleteVenue} className="fa fa-trash text-primary"></i></p>
      </div>
    )
  }
}
