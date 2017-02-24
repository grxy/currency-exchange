import { shallow } from 'enzyme';
import React from 'react';

import { createStore } from 'services/redux/store';

import Currencies from './Currencies';
import CurrenciesContainer from './CurrenciesContainer';

describe('<CurrenciesContainer />', () => {
    let wrapper;
    let component;
    let store;

    beforeEach(() => {
        store = createStore({
            data: {
                tickers: {
                    TEST: {},
                    TEST2: {}
                }
            }
        });

        wrapper = shallow(
            <CurrenciesContainer />,
            {
                context: {
                    store
                }
            }
        );

        component = wrapper.find(Currencies);
    });

    it('has the correct displayName', () => {
        expect(CurrenciesContainer.displayName).toBe('CurrenciesContainer');
    });

    it('renders a <Currencies />', () => {
        expect(component.length).toBe(1);
    });

    it('passes a data prop to <Currencies />', () => {
        const { data, index } = store.getState();

        expect(component.prop('data')).toEqual((data[data.length - index - 1] || {}).tickers || {});
    });

    it('passes an tickers prop to <Currencies />', () => {
        const { data, index } = store.getState();

        expect(component.prop('tickers')).toEqual(Object.keys((data[data.length - index - 1] || {}).tickers || {}));
    });
});
