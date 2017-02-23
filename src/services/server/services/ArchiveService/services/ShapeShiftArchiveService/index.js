import { get } from 'axios';

import ArchiveService from 'services/server/services/ArchiveService';

class ShapeShiftArchiveService {
    static async run(obj) {
        let dash, eth, ltc;

        await Promise.all([
            get('https://shapeshift.io/rate/dash_btc')
                .then(({ data }) => {
                    dash = Number(data.rate);
                }),
            get('https://shapeshift.io/rate/eth_btc')
                .then(({ data }) => {
                    eth = Number(data.rate);
                }),
            get('https://shapeshift.io/rate/ltc_btc')
                .then(({ data }) => {
                    ltc = Number(data.rate);
                })
        ]);

        const record = {
            'BTC-DASH': dash,
            'BTC-ETH': eth,
            'BTC-LTC': ltc
        };

        ArchiveService.save(obj, 'ShapeShift', record);
    }
}

export default ShapeShiftArchiveService;
