import { LOOK_UP } from '../actions/index';

export default function(state = {}, action) {
	switch (action.type) {
		case LOOK_UP:
			const data = action.payload.data;
			const id = action.meta;
			console.log('dispatched');
			if (data.Success === true) {
				return { ...state, [id]: data.CompanyInformation };
			} else {
				return state;
			}
	}
	return state;
}
