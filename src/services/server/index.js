import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import CurrencyExchange from 'index';

const app = express();

app.use((req, res) => {
    const markup = renderToStaticMarkup(<CurrencyExchange />);

    res
        .status(200)
        .set('Content-Type', 'text/html')
        .send(`<!DOCTYPE html>${markup}`);
});

const PORT = 9999;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`CurrencyExchange app listening on port ${PORT}!`);
});
