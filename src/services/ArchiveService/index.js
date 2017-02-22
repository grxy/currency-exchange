import BittrexArchiveService from './BittrexArchiveService';
import PoloniexArchiveService from './PoloniexArchiveService';

class ArchiveService {
    static run = () => {
        BittrexArchiveService.run();
        PoloniexArchiveService.run();
    }
}

export default ArchiveService;
