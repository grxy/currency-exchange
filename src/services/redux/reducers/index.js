import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import db from 'services/db';

const count = handleActions({
    UPDATE_COUNT: (state, { payload }) => {
        let number = Number(payload);

        if (isNaN(number) || number < 0) {
            number = 0;
        } else if (number > 9999) {
            number = 9999;
        }

        return number;
    }
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
