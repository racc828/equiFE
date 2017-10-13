import React from 'react'

export default class FindFriendsForm extends React.Component {
  constructor() {
    super()
    this.state = {
      friend: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property] : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let friendsName = this.state.friend
    this.props.findFriends(friendsName)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="friend" onChange={this.handleChange} required/>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }



}
