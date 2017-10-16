import React from 'react'

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: this.props.currentUser.firstname,
      lastname: this.props.currentUser.lastname,
      email: this.props.currentUser.email,
      username: this.props.currentUser.username,
      id: this.props.currentUser.id
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
    let edits = this.state
    this.props.saveEditProfile(edits)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <button type="submit" className="edit-profile" id="edit-profile-button"><i className="fa fa-floppy-o text-primary "></i></button>
        <input type="hidden" name="id" value={this.state.id}/>
        <div className="edit-profile-text">
          <div>
            <span className="text-primary">First Name</span>:
            <input onChange={this.handleChange} type="text" name="firstname" value={this.state.firstname} />
         </div>
         <div>
          <span className="text-primary">Last Name</span>:
          <input onChange={this.handleChange} type="text" name="lastname" value={this.state.lastname} />
        </div>
        <div className="span-error-wrapper">
          <span className="text-primary">Username</span>:
          <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
          {this.props.editUserExists? <small className="span-error">Username already exists, please enter a different one above</small> : null}
        </div>
        <div>
          <span className="text-primary">Email</span>:
          <input onChange={this.handleChange} type="email" name="username" value={this.state.email} />
        </div>
        </div>
      </form>
    )
  }

}
