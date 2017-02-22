require('source-map-support').install();

import express from 'express';

import ArchiveService from './services/ArchiveService';
import { ApiRouter, AppRouter } from './services/router';

const PORT_API = 8888;
const PORT_APP = 8889;

const api = express();
api.use('/api', ApiRouter);

api.listen(PORT_API, () => {
    console.log(`CurrencyExchange API listening on port ${PORT_API}!`);
});

const app = express();
app.use(AppRouter);

app.listen(PORT_APP, () => {
    console.log(`CurrencyExchange App listening on port ${PORT_APP}!`);
});

ArchiveService.start();
