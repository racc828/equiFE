import React from 'react'
import { Marker, InfoWindow } from "react-google-maps"

export default class MidpointMarker extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    return(
      <div>
        {this.state.loading ? <div className="loader-container"><div className="loader"></div></div> : null }
        <Marker position={{ lat: this.props.search.midpoint.latitude, lng: this.props.search.midpoint.longitude }}
        onClick={this.toggleOpen}>
          {this.state.isOpen &&
          <InfoWindow onCloseClick={this.toggleOpen}>
            <div>This is your midpoint: {this.props.search.midpointAddress}  </div>
          </InfoWindow>}
       </Marker>
     </div>
    )
  }

}
