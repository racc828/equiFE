import React from 'react'
import SearchesAdapter from '../adapters/SearchesAdapter'
import RecentSearch from '../components/RecentSearch'

const RecentSearches = (props) => {
  return (
    <div>
      {props.searches.map((search, i) => {
        return <RecentSearch search={search} key={i} />
      })}
    </div>
  );
};

export default RecentSearches;
