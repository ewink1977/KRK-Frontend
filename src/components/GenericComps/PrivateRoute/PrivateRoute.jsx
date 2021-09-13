import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const state = useSelector((state) => state.auth);

	if (state.isLoading) {
		return <h2>Loading...</h2>;
	// } else if (!state.isAuthenticated) {
	// 	return <Redirect to='/login' />;
	} else {
		return <Component />;
	}
};

export default PrivateRoute;
