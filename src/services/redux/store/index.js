import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { __CLIENT__, __SERVER__ } from 'services/constants';
import reducers from 'services/redux/reducers';

let createPersistentStore;

try {
    const middlewares = [
        thunk,
        promise
    ];

    const functions = [
        applyMiddleware(...middlewares)
    ];

    createPersistentStore = composeWithDevTools(
        ...functions
    )(createStore);
} catch (e) {
    createPersistentStore = createStore;
}

const create = (initialState = {}) => createPersistentStore(
    reducers,
    initialState
);

const store = create(__CLIENT__ ? window.__INITIAL_STATE__ : {});

const history = __SERVER__
    ? browserHistory
    : syncHistoryWithStore(browserHistory, store);

export default store;
export { create as createStore, history, store };
