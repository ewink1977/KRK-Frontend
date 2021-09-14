import * as api from '../api';
import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../constants';
import { returnErrors } from './messages';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
	console.log('Placeholder function while I set up alerts...');
	// SET USER LOADING
	dispatch({ type: USER_LOADING });
	// GET TOKEN FROM STATE
	const token = getState().auth.token;
	// SET HEADERS
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	// ADD TOKEN IF WE HAVE ONE
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}

	axios
		.get(api.authUserUrl, config)
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR,
			});
		});
};
