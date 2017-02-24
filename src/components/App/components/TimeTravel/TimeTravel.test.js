import { shallow } from 'enzyme';
import moment from 'moment';
import React from 'react';

import TimeTravel from './TimeTravel';

describe('<TimeTravel />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            index: 0,
            max: 100,
            timestamp: Date.now(),
            updateIndex: jasmine.createSpy('updateIndex')
        };

        wrapper = shallow(<TimeTravel {...props} />);
    });

    it('has the correct displayName', () => {
        expect(TimeTravel.displayName).toBe('TimeTravel');
    });

    it('renders an div.time-travel', () => {
        expect(wrapper.is('div.time-travel')).toBe(true);
    });

    it('renders an h2 with instructions', () => {
        expect(wrapper.contains(
            <h2>Slide for Time Travel ({moment(props.timestamp).format()})</h2>
        )).toBe(true);
    });

    describe('<input />', () => {
        let input;

        beforeEach(() => {
            input = wrapper.find('input');
        });

        it('has a change handler', () => {
            const value = Math.random();
            input.simulate('change', { target: { value } });
            expect(props.updateIndex).toHaveBeenCalledWith(value);
        });

        it('has the correct max', () => {
            expect(input.prop('max')).toBe(props.max);
        });

        it('has the correct min', () => {
            expect(input.prop('min')).toBe('0');
        });

        it('has the correct type', () => {
            expect(input.prop('type')).toBe('range');
        });

        it('has the correct value', () => {
            expect(input.prop('value')).toBe(props.index);
        });
    });
});
