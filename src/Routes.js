import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Templates/Navigation';

import Hotel from './Pages/Hotel';
import Guestrequest from './Pages/Hotel/Guestrequest';
import Rooms from './Pages/Hotel/Rooms';
import Reservation from './Pages/Hotel/Reservation';

import Restaurant from './Pages/Restaurant';
import Accounting from './Pages/Accounting';

const Routes = () => (
	<Router>
		<div>
			<Route path="/" component={Navigation} />
			<Route path="/Hotel" component={Hotel} />
			<Route path="/Restaurant" component={Restaurant} />
			<Route path="/Accounting" component={Accounting} />
			<Route path="/Hotel/Guestrequest" component={Guestrequest} />
			<Route path="/Hotel/Rooms" component={Rooms} />
			<Route path="/Hotel/Reservation" component={Reservation} />
		</div>
	</Router>
)
export default Routes;