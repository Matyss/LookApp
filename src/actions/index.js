import axios from 'axios';

const ROOT_URL = `http://ihaveanidea.aveneo.pl/NIPAPI/api/Company?CompanyId=`;

export const LOOK_UP = 'LOOK_UP';

export function lookup(company) {
	const id = company.textfield;
	const url = `${ROOT_URL}${id}`;

	const request = axios.get(url);

	return {
		type: LOOK_UP,
		payload: request
	};
}
