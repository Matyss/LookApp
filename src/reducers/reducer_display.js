import { DISPLAY_INFO } from '../actions/index';

export default function(state = null, action) {
	switch (action.type) {
		case DISPLAY_INFO:
			return action.payload;
	}
	return state;
}
