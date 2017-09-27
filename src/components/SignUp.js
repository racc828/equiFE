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
  }

  render() {
    return(
      <div id="signup-page">
        <form id="signin-login" className="userenter" onSubmit={this.handleSubmit}>
          <input name="firstname" type="text" placeholder="First Name"/>
          <input name="lastname" type="text" placeholder="Last Name"/>
          <input name="email" type="email" placeholder="Email"/>
          <input name="username" type="text" placeholder="Username"/>
          <input name="password" type="password" placeholder="Password"/>
        </form>
      </div>
    )
  }

}
