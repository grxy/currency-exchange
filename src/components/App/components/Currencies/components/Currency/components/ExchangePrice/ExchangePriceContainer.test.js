import { shallow } from 'enzyme';
import React from 'react';

import { createStore } from 'services/redux/store';

import ExchangePrice from './ExchangePrice';
import ExchangePriceContainer from './ExchangePriceContainer';

describe('<ExchangePriceContainer />', () => {
    let wrapper;
    let component;
    let store;

    beforeEach(() => {
        store = createStore({
            count: Math.random()
        });

        wrapper = shallow(
            <ExchangePriceContainer />,
            {
                context: {
                    store
                }
            }
        );

        component = wrapper.find(ExchangePrice);
    });

    it('has the correct displayName', () => {
        expect(ExchangePriceContainer.displayName).toBe('ExchangePriceContainer');
    });

    it('renders a <ExchangePrice />', () => {
        expect(component.length).toBe(1);
    });

    it('passes a count prop to <ExchangePrice />', () => {
        expect(component.prop('count')).toBe(store.getState().count);
    });
});
