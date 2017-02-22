const __SERVER__ = typeof window === 'undefined';
const __CLIENT__ = !__SERVER__;

const PORT_API = 8888;
const PORT_APP = 8889;

export {
    __CLIENT__,
    __SERVER__,
    PORT_API,
    PORT_APP,
};
