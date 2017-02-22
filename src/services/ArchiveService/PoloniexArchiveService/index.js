import { get } from 'axios';

import db from 'services/db';

class PoloniexArchiveService {
    static async run() {
        const i = setInterval(async () => {
            const { data } = await get('https://poloniex.com/public?command=returnTicker');
            const { BTC_DASH, BTC_ETH, BTC_LTC } = data;

            const record = { BTC_DASH, BTC_ETH, BTC_LTC };

            for (const key in record) {
                record[key] = Number(record[key].last);
            }

            // eslint-disable-next-line no-console
            console.log('POLONIEX ARCHIVE', JSON.stringify(record));

            record.timestamp = Date.now();

            db.poloniex.push(record);
        }, 1000);

        setTimeout(() => {
            clearInterval(i);
        }, 5500);
    }
}

export default PoloniexArchiveService;
