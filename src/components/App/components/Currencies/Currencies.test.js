import { shallow } from 'enzyme';
import React from 'react';

import Currencies from './Currencies';
import Currency from './components/Currency';

describe('<Currencies />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            data: {
                TEST: {},
                TEST2: {}
            },
            tickers: ['TEST', 'TEST2']
        };

        wrapper = shallow(<Currencies {...props} />);
    });

    it('has the correct displayName', () => {
        expect(Currencies.displayName).toBe('Currencies');
    });

    it('renders a div.currencies', () => {
        expect(wrapper.is('div.currencies')).toBe(true);
    });

    it('renders the correct number of <Currency /> components', () => {
        expect(wrapper.find(Currency).length).toBe(2);
    });

    it('passes the correct props to its children', () => {
        props.tickers.forEach((ticker, index) => {
            const child = wrapper.find(Currency).at(index);

            expect(child.prop('data')).toBe(props.data[ticker]);
            expect(child.prop('ticker')).toBe(ticker);
        });
    });
});
