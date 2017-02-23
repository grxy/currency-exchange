import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import db from 'services/db';

const count = handleActions({
    UPDATE_COUNT: (state, { payload }) => Number(payload)
}, 20);

const data = handleActions({
    TEST: (state) => state
}, db);

const index = handleActions({
    UPDATE_INDEX: (state, { payload }) => Number(payload)
}, 0);

const reducers = combineReducers({
    count,
    data,
    index,
    routing
});

export default reducers;
