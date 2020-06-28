import { combineReducers } from 'redux';

import routing from './routing';
import global from './global';

const reducers = combineReducers({
	...routing.reducer,
	...global.reducer,
});

export default reducers;
