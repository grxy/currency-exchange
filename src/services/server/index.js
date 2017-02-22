require('source-map-support').install();

import express from 'express';

import ApiRouter from './ApiRouter';
import AppRouter from './AppRouter';

import ArchiveService from 'services/ArchiveService';

const PORT_APP = 8888;
const PORT_API = 9999;

const api = express();
api.use('/api', ApiRouter);

api.listen(PORT_API, () => {
    // eslint-disable-next-line no-console
    console.log(`CurrencyExchange API listening on port ${PORT_API}!`);
});

const app = express();
app.use(AppRouter);

app.listen(PORT_APP, () => {
    // eslint-disable-next-line no-console
    console.log(`CurrencyExchange App listening on port ${PORT_APP}!`);
});

ArchiveService.start();
