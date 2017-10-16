import React from 'react'
import EditProfile from './EditProfile'

export default class MyProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      editProfile: false
    }
  }

  editProfileToggle = () => this.setState({editProfile: true})

  saveEditProfile = (edits) => {
    this.props.saveEditProfile(edits)
    .then(() => {
      if(this.props.editUserExists) {
        null
      } else {
        this.setState({
          editProfile: false
        })
      }
    })
  }

  render() {
    return(
      <div className="white-box-outer relative">
        <div className="white-box-inner">
          <h1 className="text-primary">
            My Profile
          </h1>
          {
          this.state.editProfile ?
            <div>
              <EditProfile editUserExists={this.props.editUserExists} saveEditProfile ={this.saveEditProfile} currentUser={this.props.currentUser}/>
            </div>
            :
            <div>
              <i onClick={this.editProfileToggle} className="fa fa-pencil text-primary edit-profile "></i>
              <div className="edit-profile-text">
                <p><span className="text-primary">First Name</span>: {this.props.currentUser.firstname} </p>
                <p><span className="text-primary">Last Name</span>: {this.props.currentUser.lastname} </p>
                <p><span className="text-primary">Username</span>: {this.props.currentUser.username} </p>
                <p><span className="text-primary">Email</span>: {this.props.currentUser.email} </p>
              </div>
            </div>
            }
           </div>
      </div>
    )
  }

}
