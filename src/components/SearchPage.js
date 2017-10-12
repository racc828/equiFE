import React from 'react'
import SearchesAdapter from '../adapters/SearchesAdapter'
import RecentSearches from '../components/RecentSearches'

export default class SearchPage extends React.Component {

  constructor() {
    super()
    this.state = {
      userSearches: []
    }
  }

  componentDidMount() {
    SearchesAdapter.getUserSearches()
    .then(searches => {
      this.setState({
        userSearches: searches
      })
    })
  }

  componentWillReceiveProps() {
    SearchesAdapter.getUserSearches()
    .then(searches => {
      this.setState({
        userSearches: searches
      })
    })
  }

  render() {
    debugger
    return (
      <div>
        <RecentSearches searches={this.state.userSearches} />
      </div>
    )
  }


}
