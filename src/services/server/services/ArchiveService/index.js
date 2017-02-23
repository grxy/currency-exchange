import * as services from './services';
import db from 'services/db';

class ArchiveService {
    static start = () => {
        const i = setInterval(async () => {
            try {
                const obj = {
                    exchanges: {},
                    tickers: {},
                    timestamp: Date.now()
                };

                const promises = Object.values(services).map((service) => service.run(obj));
                await Promise.all(promises);

                db.push(obj);
            } catch (err) {
                console.log('An error occurred in the ArchiveService', err);
            }
        }, 1000);

        setTimeout(() => clearInterval(i), 60000);
    }

    static save = (obj, exchange, record) => {
        for (const ticker in record) {
            const value = record[ticker];

            if (value) {
                obj.exchanges[exchange] = obj.exchanges[exchange] || {};
                obj.exchanges[exchange][ticker] = value;

                obj.tickers[ticker] = obj.tickers[ticker] || {};
                obj.tickers[ticker][exchange] = value;
            }
        }
    }
}

export default ArchiveService;
