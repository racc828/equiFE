import React from 'react';
import SavedVenue from './SavedVenue'
import VenuesAdapter from '../adapters/VenuesAdapter'

export default class SavedVenues extends React.Component {
  constructor() {
    super()
    this.state ={
      savedVenues: []
    }
  }

  componentDidMount() {
    VenuesAdapter.getSavedVenues()
    .then(data => this.setState({savedVenues: data}))
  }

  componentWillReceiveProps() {
    VenuesAdapter.getSavedVenues()
    .then(data => this.setState({savedVenues: data}))
  }

  render() {
    return(
      <div className="white-box-outer">
        <div className="white-box-inner">
          <h1 className="text-primary">
            Saved Venues
          </h1>
          {this.state.savedVenues.map((venue, i) => {
            return <SavedVenue venue={venue} key={i} />
          })}
        </div>
      </div>
    )
  }


}
