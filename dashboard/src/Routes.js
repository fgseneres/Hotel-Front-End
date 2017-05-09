import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

import Hotel from './views/Hotel.js';
import Restaurant from './views/Restaurant.js';
import Accounting from './views/Accounting.js';

import Home from './views/HotelSidebar/Home';
import Guest from './views/HotelSidebar/Guest';
import Rooms from './views/HotelSidebar/Rooms';
import Reservation from './views/HotelSidebar/Reservation';

export default class Routes extends Component {
	render() {
		return(
			<Router>
				<div>
					<Route path="/" component={App} />
					<div id="wrapper" className="toggled">
						<div id="page-content-wrapper">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-12">
										<Route path="/Hotel" component={Hotel} />
										<Route path="/Hotel/Home" component={Home} />
										<Route path="/Hotel/Guest" component={Guest} />
										<Route path="/Hotel/Rooms" component={Rooms} />
										<Route path="/Hotel/Reservation" component={Reservation} />
										<Route path="/Restaurant" component={Restaurant} />
										<Route path="/Accounting" component={Accounting} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}