import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/GenericComps/LandingPage/LandingPage';
import Login from './components/GenericComps/Login/Login';
import Register from './components/GenericComps/Register/Register';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					{/* BBSApp -- Will contain all the BBS Actions (posts, events, user management) */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
