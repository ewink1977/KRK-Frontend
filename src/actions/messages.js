import { CREATE_MESSAGE } from '../constants';

// CREATE A MESSAGE
export const createMessage = (msg) => {
	return {
		type: CREATE_MESSAGE,
		payload: msg,
	};
};
