import { combineReducers } from 'redux';

import cityListReducer from './cityListReducer'

const rootReducer = combineReducers({
    cityList: cityListReducer,
});

export default rootReducer;