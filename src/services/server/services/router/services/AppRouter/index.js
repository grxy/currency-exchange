import { Router } from 'express';
import { createLocation } from 'history';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import Html from 'components/html';
import routes from 'services/routes';
import { createStore } from 'services/redux/store';

const AppRouter = Router();

AppRouter.use((req, res) => {
    const location = createLocation(req.url);

    match({ location, routes }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send('An error occurred.');
        } else if (redirectLocation) {
            const { pathname, search } = redirectLocation;
            res.redirect(301, pathname + search);
            // eslint-disable-next-line no-negated-condition
        } else if (!renderProps) {
            res.status(404).send('Page not found');
        } else {
            const store = createStore();

            const html = renderToStaticMarkup(
                <Html initialState={store.getState()}>
                    {
                        renderToString(
                            <Provider store={store}>
                                <RouterContext {...renderProps} />
                            </Provider>
                        )
                    }
                </Html>
            );

            res.set('Content-Type', 'text/html')
                .send(`<!DOCTYPE html>${html}`);
        }
    });
});

export default AppRouter;
