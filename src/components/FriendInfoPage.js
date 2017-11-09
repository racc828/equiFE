import React from 'react';

const FriendInfoPage = (props) => {
  return (
    <div className="friend-info-name">
      <h1 className="text-primary"><i className="fa fa-long-arrow-left" onClick={props.resetActiveFriend}></i>
      {props.friendInfo.fullname}</h1>
      {props.friendInfo.venues.map((venue, i) => {
        return (
          <div>
            <p key={i}><a href={venue.url}>{venue.name}</a>: <span>{venue.street}, {venue.city}</span></p>
          </div>
        )
      })}
    </div>
  );
};

export default FriendInfoPage;
