import { DISPLAY_INFO } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case DISPLAY_INFO:
			return action.payload;
		default:
			return state;
	}
	return state;
}
