import { shallow } from 'enzyme';
import React from 'react';

import BestExchange from './BestExchange';

import CurrencySymbol from '../CurrencySymbol';
import ExchangePrice from '../ExchangePrice';

describe('<BestExchange />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            exchanges: [
                {
                    price: 1
                },
                {
                    price: 2
                }
            ],
            ticker: 'TEST'
        };

        wrapper = shallow(<BestExchange {...props} />);
    });

    it('has the correct displayName', () => {
        expect(BestExchange.displayName).toBe('BestExchange');
    });

    it('renders an div.best-exchange', () => {
        expect(wrapper.is('div.best-exchange')).toBe(true);
    });

    it('renders an h2', () => {
        expect(wrapper.contains(
            <h2>Best Exchange for <CurrencySymbol ticker={props.ticker} /></h2>
        )).toBe(true);
    });

    it('renders and <ExchangePrice />', () => {
        expect(wrapper.contains(
            <ExchangePrice {...{ price: 1 }} />
        )).toBe(true);
    });
});
