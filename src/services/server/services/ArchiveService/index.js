import * as services from './services';
import db from 'services/db';

class ArchiveService {
    static start = () => {
        const i = setInterval(async () => {
            try {
                const timestamp = Date.now();

                db[timestamp] = {};

                const promises = Object.values(services).map((service) => service.run(timestamp));

                await Promise.all(promises);
            } catch (err) {
                console.log('An error occurred in the ArchiveService', err);
            }
        }, 1000);

        setTimeout(() => clearInterval(i), 5500);
    }
}

export default ArchiveService;
