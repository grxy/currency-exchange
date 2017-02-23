import { get } from 'axios';

import ArchiveService from 'services/server/services/ArchiveService';

class PoloniexArchiveService {
    static async run(obj) {
        const { data } = await get('https://poloniex.com/public?command=returnTicker');
        const { BTC_DASH, BTC_ETH, BTC_LTC } = data;

        const record = {
            'BTC-DASH': Number(BTC_DASH.last),
            'BTC-ETH': Number(BTC_ETH.last),
            'BTC-LTC': Number(BTC_LTC.last)
        };

        ArchiveService.save(obj, 'Poloniex', record);
    }
}

export default PoloniexArchiveService;
