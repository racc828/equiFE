import React from 'react';
import VenueInfo from './VenueInfo'

const VenuesInfo = (props) => {
  return (
    <div className="venuesInfo">
      {props.venues.map((venue, i) => {
        return <VenueInfo venue={venue} key={i} />
      })}
    </div>
  );
};

export default VenuesInfo;
