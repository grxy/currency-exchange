import { shallow } from 'enzyme';
import React from 'react';

import CurrencySymbol from './CurrencySymbol';

describe('<CurrencySymbol />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            ticker: 'BTC-TEST'
        };

        wrapper = shallow(<CurrencySymbol {...props} />);
    });

    it('has the correct displayName', () => {
        expect(CurrencySymbol.displayName).toBe('CurrencySymbol');
    });

    it('renders an span.currency-symbol', () => {
        expect(wrapper.is('span.currency-symbol')).toBe(true);
    });

    it('renders the correct text', () => {
        expect(wrapper.text()).toBe('TEST');
    });
});
