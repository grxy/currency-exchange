const __SERVER__ = typeof window === 'undefined';
const __CLIENT__ = !__SERVER__;

const ARCHIVE_INTERVAL = 1000;
const ARCHIVE_TIMEOUT = 900000;

const PORT_API = 8888;
const PORT_APP = 8889;

export {
    __CLIENT__,
    __SERVER__,
    ARCHIVE_INTERVAL,
    ARCHIVE_TIMEOUT,
    PORT_API,
    PORT_APP,
};
