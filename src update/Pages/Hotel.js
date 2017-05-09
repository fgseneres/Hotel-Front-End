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
			                <li><Link to="/Hotel/Guest">Guest</Link></li>
			                <li><Link to="/Hotel/Rooms">Rooms</Link></li>
			                <li><Link to="/Hotel/Reservation">Reservation</Link></li>
			            </ul>
			        </div>
			        <div id="page-content-wrapper" className="hotel-content">
			            <div className="container-fluid">

			                <div className="row">
			                    <div className="col-lg-12">
			                       <div className="count count-day">
			                       		<h1><i className="fa fa-line-chart" aria-hidden="true"></i></h1>
			                       		<h3>36</h3>
			                       		<p>Day</p>
			                       </div>
			                       <div className="count count-week">
			                       		<h1><i className="fa fa-bar-chart" aria-hidden="true"></i></h1>
			                       		<h3>89</h3>
			                       		<p>Week</p>
			                       </div> 
			                       <div className="count count-month">
			                       		<h1><i className="fa fa-pie-chart" aria-hidden="true"></i></h1>
			                       		<h3>302</h3>
			                       		<p>Month</p>
			                       </div>
			                       <div className="count count-year">
			                       		<h1><i className="fa fa-area-chart" aria-hidden="true"></i></h1>
			                       		<h3>3276</h3>
			                       		<p>Year</p>
			                       </div>
			                       <div className="count settings">
			                       		<h1><i className="fa fa-cog" aria-hidden="true"></i></h1>
			                       </div>
			                    </div>
			                </div>

			                <div className="row">
			                    <div className="col-lg-12">
			                    	<div className="stats-content">
			                       		<h1><i className="fa fa-pie-chart" aria-hidden="true">Statistics</i></h1>
			                    	</div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}