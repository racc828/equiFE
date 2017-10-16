import React from 'react'
import '../css/mainHome.css';

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
        <div className="enter-site">
          <div className="enter-site-inner">
            <form id="signin-login" onSubmit={this.handleSubmit}>
              <h1 className="text-primary">Sign Up</h1>
              <input onChange={this.handleChange} name="firstname" type="text" placeholder="First Name"/>
              <input onChange={this.handleChange} name="lastname" type="text" placeholder="Last Name"/>
              <input onChange={this.handleChange} name="email" type="email" placeholder="Email"/>
              <div className="span-error-wrapper">
                {this.props.userExists? <small className="span-error">Username already exists, please enter a different one above</small> : null}
                <input onChange={this.handleChange} name="username" type="text" placeholder="Username"/>
              </div>
              <input onChange={this.handleChange} name="password" type="password" placeholder="Password"/>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}
