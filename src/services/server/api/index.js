import { Router } from 'express';

import db from 'services/db';

const router = Router();

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(db, null, 4));
});

router.get('/bittrex', (req, res) => {
    res
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(db.bittrex, null, 4));
});

router.get('/poloniex', (req, res) => {
    res
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(db.poloniex, null, 4));
});

export default router;
