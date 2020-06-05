import { combineReducers } from 'redux';

import error from './error';
import loading from './loading';
import vehicles from './vehicles';

const reducers = combineReducers({
    error,
    loading,
    vehicles
})

export default reducers;