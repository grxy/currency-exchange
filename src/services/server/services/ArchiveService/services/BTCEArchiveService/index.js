import { get } from 'axios';

import ArchiveService from 'services/server/services/ArchiveService';

class BTCEArchiveService {
    static async run(obj) {
        const { data } = await get('https://btc-e.com/api/3/ticker/btc_usd-ltc_usd-dsh_usd-eth_usd');

        const { btc_usd, ltc_usd, dsh_usd, eth_usd } = data;
        const btc = btc_usd.last;

        const record = {
            'BTC-DASH': dsh_usd.last / btc,
            'BTC-ETH': eth_usd.last / btc,
            'BTC-LTC': ltc_usd.last / btc
        };

        ArchiveService.save(obj, 'BTC-e', record);
    }
}

export default BTCEArchiveService;
