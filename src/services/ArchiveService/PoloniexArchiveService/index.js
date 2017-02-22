import { get } from 'axios';

import db from 'services/db';

class PoloniexArchiveService {
    static async run(timestamp) {
        const { data } = await get('https://poloniex.com/public?command=returnTicker');
        const { BTC_DASH, BTC_ETH, BTC_LTC } = data;

        const record = { BTC_DASH, BTC_ETH, BTC_LTC };

        for (const key in record) {
            record[key] = Number(record[key].last);
        }

        // eslint-disable-next-line no-console
        console.log('POLONIEX ARCHIVE', JSON.stringify(record));

        db[timestamp].poloniex = record;
    }
}

export default PoloniexArchiveService;
