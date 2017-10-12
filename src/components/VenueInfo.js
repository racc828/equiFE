import React from 'react';

const VenueInfo = (props) => {
  return (
    <div className="venueInfo">
      {props.venue.name}
    </div>
  );
};

export default VenueInfo;
