import { shallow } from 'enzyme';
import React from 'react';

import { updateCount } from 'services/redux/actions';
import { createStore } from 'services/redux/store';

import BitcoinInput from './BitcoinInput';
import BitcoinInputContainer from './BitcoinInputContainer';

describe('<BitcoinInputContainer />', () => {
    let wrapper;
    let component;
    let store;

    beforeEach(() => {
        store = createStore({
            count: Math.random()
        });

        spyOn(store, 'dispatch');

        wrapper = shallow(
            <BitcoinInputContainer />,
            {
                context: {
                    store
                }
            }
        );

        component = wrapper.find(BitcoinInput);
    });

    it('has the correct displayName', () => {
        expect(BitcoinInputContainer.displayName).toBe('BitcoinInputContainer');
    });

    it('renders a <BitcoinInput />', () => {
        expect(component.length).toBe(1);
    });

    it('passes a count prop to <BitcoinInput />', () => {
        expect(component.prop('count')).toBe(store.getState().count);
    });

    it('passes an updateCount prop to <BitcoinInput />', () => {
        const count = Math.random();

        component.props().updateCount(count);

        expect(store.dispatch).toHaveBeenCalledWith(updateCount(count));
    });
});
