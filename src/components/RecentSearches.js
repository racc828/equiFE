import React from 'react'
import SearchesAdapter from '../adapters/SearchesAdapter'
import RecentSearch from '../components/RecentSearch'

const RecentSearches = (props) => {
  return (
    <div className="white-box-outer">
      <div className="white-box-inner">
        <h1 className="text-primary">Recent Searches</h1>
        {props.searches.map((search, i) => {
          return <RecentSearch search={search} key={i} />
        })}
      </div>
    </div>
  );
};

export default RecentSearches;
