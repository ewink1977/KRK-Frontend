import { CREATE_MESSAGE } from '../constants';

const initalState = {};

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case CREATE_MESSAGE:
			return (state = action.payload);
		default:
			return state;
	}
};

export default reducer;
