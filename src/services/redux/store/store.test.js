import store, { createStore } from './store';

describe('Redux store', () => {
    it('exports a store', () => {
        expect(typeof store).toBe('object');
    });

    it('exports a createStore function', () => {
        expect(typeof createStore).toBe('function');
    });
});
