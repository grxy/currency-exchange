import BittrexArchiveService from './BittrexArchiveService';
import PoloniexArchiveService from './PoloniexArchiveService';

import db from 'services/db';

class ArchiveService {
    static start = () => {
        const i = setInterval(async () => {
            try {
                const timestamp = Date.now();

                db[timestamp] = {};

                await Promise.all([
                    BittrexArchiveService.run(timestamp),
                    PoloniexArchiveService.run(timestamp)
                ]);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.log('An error occurred in the ArchiveService', err);
            }
        }, 1000);

        setTimeout(() => clearInterval(i), 5500);
    }
}

export default ArchiveService;
