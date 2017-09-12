import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LookupCompany from './reducer_lookup';
import Display from './reducer_display';

const rootReducer = combineReducers({
	form: formReducer,
	lookupData: LookupCompany,
	display: Display
});

export default rootReducer;
