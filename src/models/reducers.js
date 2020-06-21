import { combineReducers } from 'redux';

import routing from './routing';

const reducers = combineReducers({
	...routing.reducer,
});

export default reducers;
