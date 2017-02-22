import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import db from 'services/db';

const data = handleActions({
    TEST: (state) => state
}, db);

const reducers = combineReducers({
    data,
    routing
});

export default reducers;
