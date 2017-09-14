import { LOADING_START, LOADING_END } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case LOADING_START:
			return (state = true);
		case LOADING_END:
			return (state = false);
	}
	return state;
}
