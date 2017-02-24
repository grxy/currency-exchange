import { updateCount, updateIndex } from './actions';

describe('Redux actions', () => {
    it('updateCount()', () => {
        const expected = {
            payload: {},
            type: 'UPDATE_COUNT'
        };

        expect(updateCount(expected.payload)).toEqual(expected);
    });

    it('updateIndex()', () => {
        const expected = {
            payload: {},
            type: 'UPDATE_INDEX'
        };

        expect(updateIndex(expected.payload)).toEqual(expected);
    });
});
