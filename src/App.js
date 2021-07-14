import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BBSMainApp from './components/BBSAppComps/BBSMainApp/BBSMainApp';
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
					<Route path='/bbs' component={BBSMainApp} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
