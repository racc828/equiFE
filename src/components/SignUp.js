import React from 'react'
import '../css/userEnter.css';

export default class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
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
  let newUser = {user: this.state}
  this.props.createUser(newUser)
}

  render() {
    return(
      <div id="signup-page">
        <form id="signin-login" className="userenter" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="firstname" type="text" placeholder="First Name"/>
          <input onChange={this.handleChange} name="lastname" type="text" placeholder="Last Name"/>
          <input onChange={this.handleChange} name="email" type="email" placeholder="Email"/>
          <input onChange={this.handleChange} name="username" type="text" placeholder="Username"/>
          <input onChange={this.handleChange} name="password" type="password" placeholder="Password"/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }

}
