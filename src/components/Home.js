import React from 'react'
import { Link } from "react-router-dom";
import Map from './Map'
import VenuesInfo from './VenuesInfo'
import AutoCompleteForm from './AutoCompleteForm'
import SearchesAdapter from '../adapters/SearchesAdapter'
import VenuesAdapter from '../adapters/VenuesAdapter'


export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      initiateSearch: false,
      venues: [],
      invalidSearch: false,
      loading: false,
      mapActive:true
      }
  }

  getVenues = () => {
    VenuesAdapter.getVenues(this.state.search.midpoint)
    .then(data => {
      let sortedVenues = data.businesses.sort(this.compareRatings)
      let firstFiveVenues = sortedVenues.slice(0, 5)
      debugger
      sortedVenues.length > 5 ?
        this.setState({
          venues: firstFiveVenues
        }) :
        this.setState({
          venues: sortedVenues
        })
    })
    .then(() => {
      this.setState({
        loading:false
      })
    })
  }

  // compareRatings = (a, b) => {
  //     let venueA = a.rating
  //     let venueB = b.rating
  //     let comparison = 0
  //     if (venueA >= venueB) {
  //       comparison = 1
  //     }
  //     return comparison
  //   }

  compareRating = (a, b) => {
    if (a.rating < b.rating) {
      return -1
    }else if (a.rating > b.rating) {
      return 1
    } else {
      return 0
    }
  }

    makeSearch = (search) => {
      this.setState({
        loading:true
      })
      return SearchesAdapter.makeSearch(search)
      .then(search => {
        search.midpoint.latitude === null ?
        this.setState({
          invalidSearch:true,
          loading:false
        }) :
        this.setState({
          initiateSearch: true,
          search: search,
          invalidSearch: false,
          loading:true
        })
      })
      .then(() => {
        !this.state.invalidSearch ? this.getVenues() : null
      })
    }

  resetSearch = () => {
    this.setState({
      initiateSearch: false
    })
  }

  mapActive = () => this.setState({mapActive: !this.state.mapActive})

  initiateSearch = () => this.setState({initiateSearch: !this.state.initiateSearch})


  render() {
    return(
      <div id="home">
        <a onClick={this.resetSearch} className="header-brand">Equidestined</a>
        <div className="enter-site">
          <div className="enter-site-inner">
            {this.state.loading ? <div className="loader-container"><div className="loader"></div></div> : null }
            {this.state.initiateSearch ?
              <div>
                <h1 className="text-primary left">Here's Your Midpoint!</h1>
                <a className="more-midpoints-link" onClick={this.resetSearch}>Get More Midpoints</a>
                {this.state.mapActive ?
                <div>

                  <div className="tabs-container">
                    <div className="tab">
                      <button className="map-tab active" disabled>
                        Map
                      </button>
                    </div>
                    <div className="tab">
                      <button className="list-tab non-active" onClick={this.mapActive}>
                        List
                      </button>
                    </div>
                  </div>

                  <div className="map-container">
                    <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFRY5wL6-C7xoiMksdLkTUWySSlIBDVvI&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    search={this.state.search}
                    venues={this.state.venues}
                    isMarkerShown
                    />
                  </div>
                </div>
                :
                <div>
                  <div className="tabs-container">
                    <div className="tab">
                      <button className="map-tab non-active" onClick={this.mapActive}>
                        Map
                      </button>
                    </div>
                    <div className="tab">
                      <button className="list-tab active" disabled>
                        List
                      </button>
                    </div>
                  </div>
                  <div>
                    <VenuesInfo venues={this.state.venues} />
                  </div>
                </div>
               }

             </div> :
             <AutoCompleteForm invalidSearch={this.state.invalidSearch} makeSearch={this.makeSearch} />   }
          </div>
        </div>
      </div>
    )
  }

}
