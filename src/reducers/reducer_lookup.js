import _ from 'lodash';
import { LOOK_UP, REMOVE_ENTRY } from '../actions/index';

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
		case REMOVE_ENTRY:
			return _.omit(state, action.payload);
	}
	return state;
}
