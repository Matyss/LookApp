import { LOOK_UP } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case LOOK_UP:
			const data = action.payload.data;
			if (data.Success === true) {
				return [...state, data.CompanyInformation];
			} else {
				return state;
			}
	}
	return state;
}
