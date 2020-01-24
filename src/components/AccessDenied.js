import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AccessDenied.css'

class AccessDenied extends Component {
  render() {
    return (
      <div className="DeniedPage">
        <form onSubmit={this.handleSubmit} className="form">
          <table className='DeniedTable'>
            <thead>
              <tr><td colSpan={1}><h1 className="DeniedTitle">Access Denied</h1></td></tr>
            </thead>
            <tbody >
              <tr><td colSpan={1} className="DeniedDisplay">You have attempted to access a page that you do not have access to. Please log in and try again, make an account it's free and easy, go register.</td></tr>
              <tr><td colSpan={1} ><Link className="btn btn-danger" to="/">Go to LogIn</Link></td></tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default AccessDenied;