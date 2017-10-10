import React from 'react'
import '../css/userHome.css';
import SessionsAdapter from '../adapters/SessionsAdapter';
import SearchesAdapter from '../adapters/SearchesAdapter';
import Map from './Map';
import AutoCompleteForm from './AutoCompleteForm';

export default class UserHome extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: {},
      initiateSearch: false
    }
  }

  makeSearch = (search) => {
    return SearchesAdapter.makeSearch(search)
    .then(search => {
      this.setState({
        search: search
      })
    })
  }

  componentDidMount(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
    }

  initiateSearch = () => this.setState({initiateSearch: !this.state.initiateSearch})

  render() {
    return(
      <div id="user-home-page">
        <div className="inner-user-home-page">
          <p>Welcome {this.state.currentUser.firstname} </p>
            {this.state.initiateSearch ? <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              search={this.state.search}
              isMarkerShown /> : <AutoCompleteForm makeSearch={this.makeSearch} initiateSearch={this.initiateSearch} />   }
          </div>
      </div>
    )
  }

}
