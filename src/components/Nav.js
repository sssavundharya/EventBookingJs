import React, { Component } from 'react';
import {Link}from 'react-router-dom';
class Nav extends Component {
  render() {
    return (
      <div className="App">
        <nav className=" navbar navbar-expand-sm ml-auto shadow-sm p-3 mb-5 bg-white rounded">
          <h3 className="link-right">Logo</h3>
          <ul className="navbar-nav">
            <Link className="nav-link  link " to='/login'><li className="nav-item">Login</li></Link>
            <Link className="nav-link link " to='/signup'> <li className="nav-item">Sign Up</li></Link>
            <Link className="nav-link link " to='/home'> <li className="nav-item">Home</li></Link>
          </ul>
       </nav>
      </div>
    )
  }
}
export default Nav

