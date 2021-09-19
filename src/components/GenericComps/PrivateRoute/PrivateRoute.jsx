import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth);

	if (auth.isLoading) {
		return <CircularProgress />;
	} else if (!auth.isAuthenticated) {
		return <Redirect to='/login' />;
	} else {
		return <Component {...rest} />;
	}
};

export default PrivateRoute;
