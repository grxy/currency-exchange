import { shallow } from 'enzyme';
import React from 'react';

import { updateIndex } from 'services/redux/actions';
import { createStore } from 'services/redux/store';

import TimeTravel from './TimeTravel';
import TimeTravelContainer from './TimeTravelContainer';

describe('<TimeTravelContainer />', () => {
    let wrapper;
    let component;
    let store;

    beforeEach(() => {
        store = createStore({
            data: [
                {
                    test: true,
                    timestamp: Date.now()
                },
                {
                    test: true,
                    timestamp: Date.now()
                }
            ],
            index: 0
        });

        spyOn(store, 'dispatch');

        wrapper = shallow(
            <TimeTravelContainer />,
            {
                context: {
                    store
                }
            }
        );

        component = wrapper.find(TimeTravel);
    });

    it('has the correct displayName', () => {
        expect(TimeTravelContainer.displayName).toBe('TimeTravelContainer');
    });

    it('renders a <TimeTravel />', () => {
        expect(component.length).toBe(1);
    });

    it('passes an index prop to <TimeTravel />', () => {
        expect(component.prop('index')).toBe(store.getState().index);
    });

    it('passes an max prop to <TimeTravel />', () => {
        expect(component.prop('max')).toBe(store.getState().data.length - 1);
    });

    it('passes an timestamp prop to <TimeTravel />', () => {
        const { data, index } = store.getState();
        expect(component.prop('timestamp')).toBe((data[data.length - index - 1] || {}).timestamp);
    });

    it('passes an undefined timestamp when data is invalid', () => {
        store = createStore({
            data: [],
            index: 0
        });

        wrapper = shallow(
            <TimeTravelContainer />,
            {
                context: {
                    store
                }
            }
        );

        component = wrapper.find(TimeTravel);

        expect(component.prop('timestamp')).toBe(undefined);
    });

    it('passes an updateIndex prop to <TimeTravel />', () => {
        const index = Math.random();

        component.props().updateIndex(index);

        expect(store.dispatch).toHaveBeenCalledWith(updateIndex(index));
    });
});
