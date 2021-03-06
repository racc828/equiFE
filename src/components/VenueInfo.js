import React from 'react';
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class VenueInfo extends React.Component {

  constructor() {
    super()
    this.state = {
      buttonDisabled:false
    }
  }

  saveVenue = () => {
    VenuesAdapter.saveVenue(this.props.venue, this.props.currentUser.id)
    this.setState({
      buttonDisabled:true
    })
  }

  render(){
    return(
      <div className="venueInfo">
        <p><span><img className="map-marker" src="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"/></span>
        <a href={this.props.venue.url} target="_blank">{this.props.venue.name}</a>: <br/><span>{this.props.venue.location.display_address[0]}, {this.props.venue.location.display_address[1]}</span></p>
        { this.props.currentUser !== undefined ?
          <div>
            {this.state.buttonDisabled ? <button className="disabled" disabled>Saved!</button> : <button onClick={this.saveVenue}>Save</button> }
          </div>
          : null
        }
      </div>
    )
  }
}
