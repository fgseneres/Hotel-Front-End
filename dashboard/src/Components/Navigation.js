import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">WebsiteName</Link>
					</div>
					<ul className="nav navbar-nav">
						<li className="active"><Link to="/Hotel/Home">Hotel</Link></li>
						<li><Link to="/Restaurant">Restaurant</Link></li>
						<li><Link to="/Accounting">Accounting</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}