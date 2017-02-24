import { shallow } from 'enzyme';
import React from 'react';

import ExchangePrice from './ExchangePrice';

import CurrencySymbol from '../CurrencySymbol';

describe('<ExchangePrice />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            count: Math.random(),
            exchange: 'TEST-EXCHANGE',
            price: Math.random(),
            ticker: 'TEST-TICKER'
        };

        wrapper = shallow(<ExchangePrice {...props} />);
    });

    it('has the correct displayName', () => {
        expect(ExchangePrice.displayName).toBe('ExchangePrice');
    });

    it('renders the correct content', () => {
        const { count, exchange, price, ticker } = props;

        const rate = Number(parseFloat(count / price).toFixed(4));

        expect(wrapper.contains(
            <div className="exchange-price">
                Trade at {exchange} for {rate} <CurrencySymbol ticker={ticker} />
            </div>
        )).toBe(true);
    });
});
