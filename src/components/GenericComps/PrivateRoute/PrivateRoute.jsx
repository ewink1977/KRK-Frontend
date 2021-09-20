import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth.isLoading) {
					return <CircularProgress />;
				} else if (!auth.isAuthenticated) {
					return <Redirect to='/login' />;
				} else {
					return <Component {...props} />;
				}
			}}
		/>
	);
};



export default PrivateRoute;
