import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hotel extends Component {
	render() {
		return(
			<div>
				<div id="wrapper" className="toggled">
			        <div id="sidebar-wrapper">
			            <ul className="sidebar-nav">
			                <li className="sidebar-brand"><a href="#">Hotel Dashboard</a></li>
			                <li><Link to="/Hotel/Guestrequest">Guest Request</Link></li>
			                <li><Link to="/Hotel/Rooms">Rooms</Link></li>
			                <li><Link to="/Hotel/Reservation">Reservation</Link></li>
			            </ul>
			        </div>
			        <div id="page-content-wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-12">
			                    	<h1>Hotel</h1>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}