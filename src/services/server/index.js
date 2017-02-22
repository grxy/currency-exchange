require('source-map-support').install();

import express from 'express';

import ArchiveService from './services/ArchiveService';
import { ApiRouter, AppRouter } from './services/router';

import { PORT_API, PORT_APP } from 'services/constants';

const api = express();
api.use('/api', ApiRouter);

api.listen(PORT_API, () => {
    console.log(`CurrencyExchange API listening on port ${PORT_API}!`);
});

const app = express();
app.use('/public', express.static('public'));
app.use(AppRouter);

app.listen(PORT_APP, () => {
    console.log(`CurrencyExchange App listening on port ${PORT_APP}!`);
});

ArchiveService.start();
