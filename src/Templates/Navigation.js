import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
  	return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span> 
              </button>
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><Link to="/Hotel">Hotel</Link></li>
                <li><Link to="/Restaurant">Restaurant</Link></li>
                <li><Link to="/Accounting">Accounting</Link></li>  
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}