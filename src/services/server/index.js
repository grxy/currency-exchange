import express from 'express';

import api from './api';
import ArchiveService from 'services/ArchiveService';

ArchiveService.run();

const app = express();

app.use('/api', api);

const PORT = 9999;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`CurrencyExchange app listening on port ${PORT}!`);
});
