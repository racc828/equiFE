import React from 'react'
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const Map = withGoogleMap(props =>

  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: props.search.midpoint.latitude, lng: props.search.midpoint.longitude }}
  >
    {props.isMarkerShown &&
    <Marker position={{ lat: props.search.midpoint.latitude, lng: props.search.midpoint.longitude }}>
      {props.isOpen &&
      <InfoWindow>
        <i className="fa fa-anchor"></i>
        <div>Aye</div>
      </InfoWindow> }
    </Marker>
    }

    {props.isMarkerShown &&
      props.venues.map((venue, i) => {
        return (
          <Marker position={{ lat: venue.geometry.location.lat, lng: venue.geometry.location.lng }} key={i} onClick={props.toggleOpen}>
            {props.isOpen &&
              <InfoWindow>
                <div>{venue.name}</div>
              </InfoWindow>
            }
          </Marker>
        )
      })
    }

  </GoogleMap>

)

export default Map
