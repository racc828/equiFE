import React from 'react'
import { Link } from "react-router-dom";
import Map from './Map'
import AutoCompleteForm from './AutoCompleteForm'
import SearchesAdapter from '../adapters/SearchesAdapter'


export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      search: {},
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

  initiateSearch = () => this.setState({initiateSearch: !this.state.initiateSearch})


  render() {
    return(
      <div id="home">
        <div className="enter-site">
          <div className="enter-site-inner">
              {this.state.initiateSearch ? <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                search={this.state.search}
                isMarkerShown /> : <AutoCompleteForm makeSearch={this.makeSearch} initiateSearch={this.initiateSearch} />   }
          </div>
        </div>
      </div>
    )
  }

}
