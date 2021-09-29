import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BBSMainApp from './components/BBSAppComps/BBSMainApp/BBSMainApp';
import LandingPage from './components/GenericComps/LandingPage/LandingPage';
import Login from './components/GenericComps/Login/Login';
import Register from './components/GenericComps/Register/Register';
// import PrivateRoute from './components/GenericComps/PrivateRoute/PrivateRoute';
import { loadUser } from './actions/auth';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, []);

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route exact path='/bbs' component={BBSMainApp} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
