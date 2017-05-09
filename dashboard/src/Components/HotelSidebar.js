import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HotelSIdebar extends Component {
	render() {
		return(
			<div id="sidebar-wrapper">
				<ul className="sidebar-nav">
					<li className="sidebar-brand"><a href="">Hotel Dashboard</a></li>
                	<li><Link to="/Hotel/Home">Home</Link></li>
	                <li><Link to="/Hotel/Guest">Guest</Link></li>
	                <li><Link to="/Hotel/Rooms">Rooms</Link></li>
	                <li><Link to="/Hotel/Reservation">Reservation</Link></li>
				</ul>
			</div>
		);
	}
}