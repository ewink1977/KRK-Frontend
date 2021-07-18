import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainHeader from '../../GenericComps/MainHeader/MainHeader';
import Profile from '../../UserComps/Profile/Profile';
import BBSHome from '../BBSHome/BBSHome';
import Footer from '../../GenericComps/Footer/Footer';
import AllEvents from '../../EventComps/AllEvents/AllEvents';
import SingleEvent from '../../EventComps/SingleEvent/SingleEvent';

const BBSMainApp = () => {
	return (
		<Router>
			<Fragment>
				<MainHeader />
				<Switch>
					<Route exact path='/bbs' component={BBSHome} />
					<Route path='/bbs/profile' component={Profile} />
					<Route exact path='/bbs/events' component={AllEvents} />
					<Route path='/bbs/events/single' component={SingleEvent} />
				</Switch>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default BBSMainApp;
