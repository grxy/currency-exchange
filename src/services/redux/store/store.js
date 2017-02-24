import { browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { __CLIENT__, __SERVER__ } from 'services/constants';
import reducers from 'services/redux/reducers';

const middlewares = [
    thunk,
    promise
];

const functions = [
    applyMiddleware(...middlewares)
];

const createPersistentStore = composeWithDevTools(
    ...functions
)(createStore);

const create = (initialState = {}) => createPersistentStore(
    reducers,
    initialState
);

const store = create(__CLIENT__ ? window.__INITIAL_STATE__ : {});

export default store;
export { create as createStore };
