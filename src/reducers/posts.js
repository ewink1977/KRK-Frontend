import {
	CREATE_NEW_POST,
	FETCH_ALL_POSTS,
	FETCH_SINGLE_POST,
} from '../constants';

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_POSTS:
		case FETCH_SINGLE_POST:
			return action.payload;
		case CREATE_NEW_POST:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default reducer;
