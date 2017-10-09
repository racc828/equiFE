import React from 'react'
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.search.midpoint.latitude, lng: props.search.midpoint.longitude }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.search.midpoint.latitude, lng: props.search.midpoint.longitude }} />}
  </GoogleMap>
)

export default Map
