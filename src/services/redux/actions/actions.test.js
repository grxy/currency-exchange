import axios from 'axios';

import { updateCount, updateData, updateIndex } from './actions';

describe('Redux actions', () => {
    it('updateCount()', () => {
        const expected = {
            payload: {},
            type: 'UPDATE_COUNT'
        };

        expect(updateCount(expected.payload)).toEqual(expected);
    });

    it('updateData()', () => {
        const response = {
            data: {}
        };

        const promise = Promise.resolve(response);

        spyOn(axios, 'get').and.returnValue(promise);

        const expected = {
            payload: promise,
            type: 'UPDATE_DATA'
        };

        expect(updateData()).toEqual(expected);
    });

    it('updateData() with a rejection', () => {
        const promise = Promise.reject('REJECTED');

        spyOn(axios, 'get').and.returnValue(promise);

        const expected = {
            payload: promise,
            type: 'UPDATE_DATA'
        };

        expect(updateData()).toEqual(expected);
    });

    it('updateIndex()', () => {
        const expected = {
            payload: {},
            type: 'UPDATE_INDEX'
        };

        expect(updateIndex(expected.payload)).toEqual(expected);
    });
});
