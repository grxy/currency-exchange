import { shallow } from 'enzyme';
import React from 'react';

import BitcoinInput from './BitcoinInput';

describe('<BitcoinInput />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            count: Math.random(),
            updateCount: jasmine.createSpy('updateCount')
        };

        wrapper = shallow(<BitcoinInput {...props} />);
    });

    it('has the correct displayName', () => {
        expect(BitcoinInput.displayName).toBe('BitcoinInput');
    });

    it('renders an h1.bitcoin-input', () => {
        expect(wrapper.is('h1.bitcoin-input')).toBe(true);
    });

    it('renders the first span', () => {
        expect(wrapper.contains(<span>I have</span>)).toBe(true);
    });

    describe('<input />', () => {
        let input;

        beforeEach(() => {
            input = wrapper.find('input');
        });

        it('has a change handler', () => {
            const value = Math.random();
            input.simulate('change', { target: { value } });
            expect(props.updateCount).toHaveBeenCalledWith(value);
        });

        it('has the correct type', () => {
            expect(input.prop('type')).toBe('number');
        });

        it('has the correct value', () => {
            expect(input.prop('value')).toBe(props.count);
        });
    });

    it('renders the second span', () => {
        expect(wrapper.contains(<span>BTC</span>)).toBe(true);
    });
});
