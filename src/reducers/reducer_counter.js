import { DECREMENT, INCREMENT } from '../actions/types';

export default function(state = 1, action) {
	switch (action.type) {
		case INCREMENT:
			return (state = state + 1);
		case DECREMENT:
			return (state = state - 1);
	}
	return state;
}
