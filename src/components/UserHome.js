import React from 'react'
import '../css/userHome.css';
import SessionsAdapter from '../adapters/SessionsAdapter';
import SearchesAdapter from '../adapters/SearchesAdapter';
import VenuesAdapter from '../adapters/VenuesAdapter';
import Map from './Map';
import VenuesInfo from './VenuesInfo';
import AutoCompleteForm from './AutoCompleteForm';


export default class UserHome extends React.Component {


  constructor() {
    super()
    this.state = {
      currentUser: {},
      initiateSearch: false,
      venues: []
      }
  }

  getVenues = () => {
    VenuesAdapter.getVenues(this.state.search.midpoint)
    .then(data => {
      let sortedVenues = data.results.sort(this.compareRatings)
      let firstFiveVenues = sortedVenues.slice(0, 5)
      sortedVenues.length > 5 ?
        this.setState({
          venues: firstFiveVenues
        }) :
        this.setState({
          venues: sortedVenues
        })
    })
  }

  compareRatings = (a, b) => {
      let venueA = a.rating
      let venueB = b.rating
      let comparison = 0
      if (venueA > venueB) {
        comparison = 1
      }
      return comparison
    }

  makeSearch = (search) => {
    return SearchesAdapter.makeSearch(search)
    .then(search => {
      this.setState({
        search: search
      })
    })
    .then(() => {
      this.getVenues()
    })
  }


  initiateSearch = () => this.setState({initiateSearch: !this.state.initiateSearch})

  render() {
    return(
      <div id="user-home">
        <div className="user-home-header">
          <p>Welcome {this.props.currentUser.firstname} </p>
        </div>
        <div className="user-home-page">
          <div className="inner-user-home-page">
            <h1 className="text-primary left">Equidestined</h1>
            <p className="text-grey">Enter two or three addresses to find the optimal meeting spot!</p>
              {this.state.initiateSearch ?
                <div>
                  <VenuesInfo venues={this.state.venues} currentUser={this.props.currentUser}  />
                  <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFRY5wL6-C7xoiMksdLkTUWySSlIBDVvI&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  search={this.state.search}
                  venues={this.state.venues}
                  isMarkerShown
                  />
               </div> :
               <AutoCompleteForm makeSearch={this.makeSearch} initiateSearch={this.initiateSearch} />   }
            </div>
        </div>
      </div>
    )
  }

}
