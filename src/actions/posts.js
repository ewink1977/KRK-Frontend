import * as api from '../api';
import { createMessage } from './messages';
import axios from 'axios';
import { tokenConfig } from './auth';
import {
	CREATE_NEW_POST,
	FETCH_ALL_POSTS,
	FETCH_SINGLE_POST,
	GET_ERRORS,
} from '../constants';

// Action Creators

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: FETCH_ALL_POSTS, payload: data });
	} catch (err) {
		const errors = {
			msg: err.response.data,
			status: err.response.status,
		};
		dispatch({
			type: GET_ERRORS,
			payload: errors,
		});
	}
};

export const getSinglePost = (postID) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`http://127.0.0.1:8000/api/posts/${postID}`
		);
		dispatch({ type: FETCH_SINGLE_POST, payload: data });
	} catch (err) {
		const errors = {
			msg: err.response.data,
			status: err.response.status,
		};
		dispatch({
			type: GET_ERRORS,
			payload: errors,
		});
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: CREATE_NEW_POST, payload: data });
		dispatch(createMessage({ postAdded: 'The post has been added!' }));
	} catch (err) {
		const errors = {
			msg: err.response.data,
			status: err.response.status,
		};
		dispatch({
			type: GET_ERRORS,
			payload: errors,
		});
	}
};