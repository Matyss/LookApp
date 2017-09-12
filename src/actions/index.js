import axios from 'axios';

const ROOT_URL = `http://ihaveanidea.aveneo.pl/NIPAPI/api/Company?CompanyId=`;

export const LOOK_UP = 'LOOK_UP';
export const DISPLAY_INFO = 'DISPLAY_INFO';

export function lookup(company) {
	const id = company.textfield;
	const url = `${ROOT_URL}${id}`;

	const request = axios.get(url);

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
