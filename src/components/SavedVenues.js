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
      <div>
        {this.state.savedVenues.map((venue, i) => {
          return <SavedVenue venue={venue} key={i} />
        })}
      </div>
    )
  }


}
