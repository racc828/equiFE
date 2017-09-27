import React from 'react'
import '../css/userEnter.css';

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = this.state
    this.props.getUser(user)
  }


  render() {
    return(
      <div id="login-page">
        <form id="user-login" className="userenter" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="username" type="text" placeholder="Username"/>
          <input onChange={this.handleChange} name="password" type="password" placeholder="Password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

}
