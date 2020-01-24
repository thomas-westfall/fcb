import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './RegisterPage.css';

class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        password: '',
        username: '',
        phoneNumber: NaN,
        email: '',
      }
    }
    showPass(){
      var pass = document.getElementById("password");
      if (pass.type === "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    }
    handleChangeFirstName = (event) => {
      this.setState({firstName: event.target.value})
    }
    handleChangeLastName = (event) => {
      this.setState({lastName: event.target.value})
    }
    handleChangePassword = (event) => {
      this.setState({password: event.target.value})
    }
    handleChangeUsername = (event) => {
      this.setState({username: event.target.value})
    }
    handleChangePhone = (event) => {
      this.setState({phoneNumber: event.target.value})
    }
    handleChangeEmail = (event) => {
      this.setState({email: event.target.value})
    }
    handleSubmit = async (submit) => {
      submit.preventDefault()
      const newUser = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "password": this.state.password,
        "username": this.state.username,
        "phoneNumber": this.state.phoneNumber,
        "email": this.state.email,
      } 
      await this.props.registerUser(newUser);
      
      if(this.props.registerSuccess === "User Successfully Registered!") {
        this.props.history.push("/login");
      }
    }
    render() {
    return (
        <div className='registerPage'>
          <form onSubmit={this.handleSubmit} className="form">
          <table className='registerTable'>
            <thead>
              <tr><td colSpan={2}><h1 className="registerTitle">Sign Up</h1></td></tr>
            </thead>
            <tbody >
              <tr><td className="TextField">Username:</td><td className="inputFieldR"><input type="text" className="Username" onChange={this.handleChangeUsername} /></td></tr>
              <tr><td className="TextField">Password:</td><td className="inputFieldR"><input type="password" className="Password" id="password" onChange={this.handleChangePassword}></input></td></tr>
              <tr><td colSpan={2} className="showPassword"><input type="checkbox" className="showPassCheck"id='show-password' onClick={this.showPass}></input><label for='show-password'>Show Password</label></td></tr>
              <tr><td className="TextField">First Name:</td><td className="inputFieldR"><input type="text" className="firstName" onChange={this.handleChangeFirstName} /></td></tr>
              <tr><td className="TextField">Last Name:</td><td className="inputFieldR"><input type="text" className="lastName"  onChange={this.handleChangeLastName}></input></td></tr>
              <tr><td className="TextField">Phone Number:</td><td className="inputFieldR"><input type="number" className="phoneNumber" onChange={this.handleChangePhone} /></td></tr>
              <tr><td className="TextField">Email:</td><td className="inputFieldR"><input type="text" className="email"  onChange={this.handleChangeEmail}></input></td></tr>
              <tr>{this.props.registerSuccess ? <td colSpan={2} className="successMessage">{this.props.registerSuccess}</td> : ""}{this.props.registerError ? <td colSpan={2} className ="errorMessage">{this.props.registerError.data}</td> : ""}</tr>
              <tr><td colSpan={2}><button className="registerButton">Register</button></td></tr>
              <tr><td colSpan={2}><Link className="cancelButton"to ="/">Cancel</Link></td></tr>
              <tr></tr>
            </tbody>
          </table>
        </form>
        </div>
    )
  }
  }
    
export default withRouter(Register);