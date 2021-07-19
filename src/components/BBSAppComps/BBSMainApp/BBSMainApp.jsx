import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainHeader from '../../GenericComps/MainHeader/MainHeader';
import Profile from '../../UserComps/Profile/Profile';
import BBSHome from '../BBSHome/BBSHome';
import Footer from '../../GenericComps/Footer/Footer';
import AllEvents from '../../EventComps/AllEvents/AllEvents';
import SingleEvent from '../../EventComps/SingleEvent/SingleEvent';
import PostWithReplies from '../../PostComps/PostWithReplies/PostWithReplies';

const BBSMainApp = () => {
	return (
		<Router>
			<Fragment>
				<MainHeader />
				<Switch>
					<Route exact path='/bbs' component={BBSHome} />
					<Route path='/bbs/post/id' component={PostWithReplies} />
					{/* This ^^ componet URL will be swapped out with dynamic URL. */}
					<Route exact path='/bbs/profile' component={Profile} />
					{/* This ^^ component URL will be swapped out with dynamic URL. */}
					<Route exact path='/bbs/events' component={AllEvents} />
					<Route path='/bbs/events/single' component={SingleEvent} />
					{/* This ^^ component URL will be swapped out with dynamic URL. */}
				</Switch>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default BBSMainApp;
