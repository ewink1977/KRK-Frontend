import React, { Fragment, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	browserHistory,
} from 'react-router-dom';
import MainHeader from '../../GenericComps/MainHeader/MainHeader';
import Profile from '../../UserComps/Profile/Profile';
import BBSHome from '../BBSHome/BBSHome';
import Footer from '../../GenericComps/Footer/Footer';
import AllEvents from '../../EventComps/AllEvents/AllEvents';
import SingleEvent from '../../EventComps/SingleEvent/SingleEvent';
import PostWithReplies from '../../PostComps/PostWithReplies/PostWithReplies';
// import Alerts from '../../GenericComps/Alerts/Alerts';

const BBSMainApp = () => {
	return (
		<Router history={browserHistory}>
			<MainHeader />
			{/* <Alerts /> */}
			<Switch>
				<Route exact path='/bbs' component={BBSHome} />
				<Route
					exact
					path='/bbs/post/:postID'
					component={PostWithReplies}
				/>
				<Route path='/bbs/profile' component={Profile} />
				{/* This ^^ component URL will be swapped out with dynamic URL. */}
				<Route path='/bbs/events' component={AllEvents} />
				<Route path='/bbs/events/single' component={SingleEvent} />
				{/* This ^^ component URL will be swapped out with dynamic URL. */}
			</Switch>
			<Footer />
		</Router>
	);
};

export default BBSMainApp;
