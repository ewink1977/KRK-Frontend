import * as api from '../api';
import axios from 'axios';
import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from '../constants';
import { returnErrors } from './messages';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
	// SET USER LOADING
	dispatch({ type: USER_LOADING });
	axios
		.get(api.authUserUrl, tokenConfig(getState))
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

// LOGIN USER
export const login = (username, password) => (dispatch) => {
	// SET HEADERS
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	// STRINGIFY THE BODY, OH YEAH!
	const body = JSON.stringify({ username, password });
	axios
		.post(api.loginUserUrl, body, config)
		.then((res) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: LOGIN_FAIL,
			});
		});
};

// REGISTER USER
export const registerUser =
	({ username, password, email }) =>
	(dispatch) => {
		// SET HEADERS
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		// STRINGIFY THE BODY, OH YEAH!
		const body = JSON.stringify({ username, password, email });
		axios
			.post(api.registerUserUrl, body, config)
			.then((res) => {
				dispatch({
					type: REGISTER_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch(returnErrors(err.response.data, err.response.status));
				dispatch({
					type: REGISTER_FAIL,
				});
			});
	};

// LOGOUT USER
export const logoutUser = () => (dispatch, getState) => {
	axios
		.post(api.logoutUserUrl, null, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: LOGOUT_SUCCESS,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};

// SETUP CONFIG WITH TOKEN (HELPER FUNCTION)
export const tokenConfig = (getState) => {
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

	return config;
};