import * as api from '../api';
import { createMessage } from './messages';
import { CREATE_NEW_POST, FETCH_ALL_POSTS, GET_ERRORS } from '../constants';

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
