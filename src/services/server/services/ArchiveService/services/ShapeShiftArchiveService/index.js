import { get } from 'axios';

import db from 'services/db';

class ShapeShiftArchiveService {
    static async run(timestamp) {
        let dash, eth, ltc;

        await Promise.all([
            get('https://shapeshift.io/rate/dash_btc')
                .then(({ data }) => {
                    dash = data.rate;
                }),
            get('https://shapeshift.io/rate/eth_btc')
                .then(({ data }) => {
                    eth = data.rate;
                }),
            get('https://shapeshift.io/rate/ltc_btc')
                .then(({ data }) => {
                    ltc = data.rate;
                })
        ]);

        const record = {
            'BTC-DASH': dash,
            'BTC-ETH': eth,
            'BTC-LTC': ltc
        };

        console.log('SHAPESHIFT ARCHIVE', JSON.stringify(record));

        db[timestamp].shapeshift = record;
    }
}

export default ShapeShiftArchiveService;
