import * as api from '../api';
import { CREATE_NEW_POST, FETCH_ALL_POSTS } from '../constants';

// Action Creators

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: FETCH_ALL_POSTS, payload: data });
	} catch (error) {
		console.error(error);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: CREATE_NEW_POST, payload: data });
	} catch (error) {
		console.error(error);
	}
};
