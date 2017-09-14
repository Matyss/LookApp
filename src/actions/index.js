import axios from 'axios';
import {
	LOOK_UP,
	DISPLAY_INFO,
	REMOVE_ENTRY,
	INCREMENT,
	DECREMENT,
	LOADING_START,
	LOADING_END
} from './types';

const ROOT_URL = `http://ihaveanidea.aveneo.pl/NIPAPI/api/Company?CompanyId=`;

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

export function loadingStart() {
	return {
		type: LOADING_START
	};
}

export function loadingEnd() {
	return {
		type: LOADING_END
	};
}
