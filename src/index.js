import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory as history, match, Router } from 'react-router';

import routes from 'services/routes';
import store from 'services/redux/store';

import './index.less';

match({ history, routes }, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps} />
        </Provider>,
        document.getElementById('app'),
        () => {
            const initialState = document.getElementById('initial-state');

            if (initialState) {
                initialState.parentElement.removeChild(initialState);
            }
        }
    );
});
