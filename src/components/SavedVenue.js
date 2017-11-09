import React from 'react';
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class SavedVenue extends React.Component {


  deleteVenue = () => {
    this.props.deleteVenue(this.props.venue.id)
  }

  render(){
    return(
      <div className="venueInfo">
        <p>
          <a href={this.props.venue.url} target="_blank">{this.props.venue.name}</a>
          : <span>{this.props.venue.street}, {this.props.venue.city}</span> <i onClick={this.deleteVenue} className="fa fa-trash text-primary"></i></p>
      </div>
    )
  }
}
