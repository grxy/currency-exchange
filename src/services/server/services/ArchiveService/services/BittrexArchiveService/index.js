import { get } from 'axios';

import ArchiveService from 'services/server/services/ArchiveService';

class BittrexArchiveService {
    static async run(obj) {
        const { data } = await get('https://bittrex.com/api/v1.1/public/getmarketsummaries');

        const record = {};

        data.result.forEach(({ Last: value, MarketName: ticker }) => {
            if (ticker.match(/^BTC-(DASH|ETH|LTC)$/)) {
                record[ticker] = value;
            }
        });

        ArchiveService.save(obj, 'Bittrex', record);
    }
}

export default BittrexArchiveService;
