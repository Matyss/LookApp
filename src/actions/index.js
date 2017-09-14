import axios from 'axios';

const ROOT_URL = `http://ihaveanidea.aveneo.pl/NIPAPI/api/Company?CompanyId=`;

export const LOOK_UP = 'LOOK_UP';
export const DISPLAY_INFO = 'DISPLAY_INFO';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function lookup(company, callback) {
	const id = company.textfield;
	const url = `${ROOT_URL}${id}`;

	const request = axios.get(url).then(dataFromRequest => {
		callback(dataFromRequest);
		return dataFromRequest;
	});

	return {
		type: LOOK_UP,
		payload: request,
		meta: id
	};
}

export function display(company) {
	return {
		type: DISPLAY_INFO,
		payload: company
	};
}

export function remove(key) {
	return {
		type: REMOVE_ENTRY,
		payload: key
	};
}

export function increment() {
	return {
		type: INCREMENT
	};
}

export function decrement() {
	return {
		type: DECREMENT
	};
}
