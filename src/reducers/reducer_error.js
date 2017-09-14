import { LOOK_UP, DISPLAY_INFO } from '../actions/types';

export default function(state = false, action) {
	switch (action.type) {
		case LOOK_UP:
			const data = action.payload.data;
			if (!data.Success) {
				return true;
			} else {
				return false;
			}
		case DISPLAY_INFO:
			return false;
	}
	return state;
}
