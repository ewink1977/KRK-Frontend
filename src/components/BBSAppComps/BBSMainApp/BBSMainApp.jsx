import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainHeader from '../../GenericComps/MainHeader/MainHeader';
import BBSHome from '../BBSHome/BBSHome';

const BBSMainApp = () => {
	return (
		<Router>
			<Fragment>
				<MainHeader />
				<Switch>
					<Route exact path='/bbs' component={BBSHome} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default BBSMainApp;
