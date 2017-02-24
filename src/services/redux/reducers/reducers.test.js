import reducers from './reducers';

import db from 'services/db';
import { updateCount, updateIndex } from 'services/redux/actions';

describe('reducers', () => {
    describe('handles the UPDATE_COUNT action', () => {
        it('with a string payload', () => {
            expect(reducers(undefined, updateCount('asdasd'))).toEqual({
                count: 0,
                data: db,
                index: 0
            });
        });

        it('with a number < 0', () => {
            expect(reducers(undefined, updateCount(-999))).toEqual({
                count: 0,
                data: db,
                index: 0
            });
        });

        it('with a number > 9999', () => {
            expect(reducers(undefined, updateCount(9999999))).toEqual({
                count: 9999,
                data: db,
                index: 0
            });
        });

        it('with a number > 0 and < 9999', () => {
            expect(reducers(undefined, updateCount(999))).toEqual({
                count: 999,
                data: db,
                index: 0
            });
        });
    });

    describe('handles the UPDATE_INDEX action', () => {
        it('with a string payload', () => {
            expect(reducers(undefined, updateIndex('123'))).toEqual({
                count: 20,
                data: db,
                index: 123
            });
        });

        it('with a number', () => {
            expect(reducers(undefined, updateIndex(123))).toEqual({
                count: 20,
                data: db,
                index: 123
            });
        });
    });
});
