import { Router } from 'express';

import db from 'services/db';

const ApiRouter = Router();

const getByExchange = (exchange) => {
    const output = {};

    for (const timestamp in db) {
        output[timestamp] = db[timestamp][exchange.toLowerCase()];
    }

    return output;
};

ApiRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    next();
});

ApiRouter.get(/^\/(exchange)?$/, (req, res) => {
    res
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(db, null, 4));
});

ApiRouter.get('/exchange/:exchange', (req, res) => {
    res
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(getByExchange(req.params.exchange), null, 4));
});

export default ApiRouter;
