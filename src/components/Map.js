import React from 'react'
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import MapsMarker from './MapsMarker'
import MidpointMarker from './MidpointMarker'



const Map = withGoogleMap(props =>

  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.search.midpoint.latitude, lng: props.search.midpoint.longitude }}
  >
    {props.isMarkerShown &&
      <MidpointMarker search={props.search} />
    }

    {props.isMarkerShown &&
      props.venues.map((venue, i) => {
        return (
          <MapsMarker key={i} venue={venue} />
        )
      })
    }

  </GoogleMap>

)

export default Map


// const Map = compose(
//   withStateHandlers(() => ({
//     midpointisOpen: false,
//   }), {
//     onToggleMidpointOpen: ({ midpointisOpen }) => () => ({
//       midpointisOpen: !midpointisOpen,
//     })
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: props.search.midpoint.latitude, lng: props.search.midpoint.longitude }}
//   >
//     <Marker
//       position={{ lat: props.search.midpoint.latitude, lng: props.search.midpoint.longitude }}
//       onClick={props.onToggleMidpointOpen}
//     >
//       {props.midpointisOpen &&
//       <InfoWindow onCloseClick={props.onToggleMidpointOpen}>
//         <div>This is your midpoint: </div>
//       </InfoWindow>}
//     </Marker>
//
//     {props.venues.map((venue, i) => {
//       return (
//         <MapsMarker venue={venue} />
//       )
//     })}
//   </GoogleMap>
// );
//
// export default Map
