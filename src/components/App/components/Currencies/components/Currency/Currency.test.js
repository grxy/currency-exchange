import { shallow } from 'enzyme';
import React from 'react';

import Currency from './Currency';

import BestExchange from './components/BestExchange';
import CurrencySymbol from './components/CurrencySymbol';
import ExchangePrice from './components/ExchangePrice';

describe('<Currency />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            data: {
                ZX1: Math.random(),
                EX1: Math.random(),
                EX2: Math.random()
            },
            ticker: 'TEST'
        };

        wrapper = shallow(<Currency {...props} />);
    });

    it('has the correct displayName', () => {
        expect(Currency.displayName).toBe('Currency');
    });

    it('renders an div.currency', () => {
        expect(wrapper.is('div.currency')).toBe(true);
    });

    it('renders a <CurrencySymbol />', () => {
        expect(wrapper.contains(
            <CurrencySymbol ticker={props.ticker} />
        )).toBe(true);
    });

    it('renders the correct number of <ExchangePrice /> components', () => {
        expect(wrapper.find(ExchangePrice).length).toBe(Object.keys(props.data).length);
    });

    it('renders a <BestExchange />', () => {
        expect(wrapper.contains(
            <BestExchange exchanges={wrapper.instance().getExchanges()} ticker={props.ticker} />
        )).toBe(true);
    });

    describe('getExchanges()', () => {
        it('returns an array of alphabetized exchange data', () => {
            const { data, ticker } = props;
            const { EX1, EX2, ZX1 } = data;

            const expected = [
                {
                    exchange: 'EX1',
                    price: EX1,
                    ticker
                },
                {
                    exchange: 'EX2',
                    price: EX2,
                    ticker
                },
                {
                    exchange: 'ZX1',
                    price: ZX1,
                    ticker
                }
            ];

            expect(wrapper.instance().getExchanges()).toEqual(expected);
        });
    });
});
