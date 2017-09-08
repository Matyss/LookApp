import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LookupCompany from './reducer_lookup';

const rootReducer = combineReducers({
	form: formReducer,
	lookupData: LookupCompany
});

export default rootReducer;
