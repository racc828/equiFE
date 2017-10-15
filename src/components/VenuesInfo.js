import React from 'react';
import VenueInfo from './VenueInfo'

const VenuesInfo = (props) => {
  return (
    <div className="venuesInfo">
      <h3 className="left"><strong>Nearby Venues</strong></h3>
      {props.venues.map((venue, i) => {
        return <VenueInfo currentUser={props.currentUser} venue={venue} key={i} />
      })}
    </div>
  );
};

export default VenuesInfo;
