import { shallow } from 'enzyme';
import React from 'react';

import store from 'services/redux/store';

import App from './App';
import AppContainer from './AppContainer';

describe('<AppContainer />', () => {
    let wrapper;
    let component;

    beforeEach(() => {
        spyOn(store, 'dispatch');

        wrapper = shallow(
            <AppContainer />,
            {
                context: {
                    store
                }
            }
        );

        component = wrapper.find(App);
    });

    it('has the correct displayName', () => {
        expect(AppContainer.displayName).toBe('AppContainer');
    });

    it('renders a <App />', () => {
        expect(component.length).toBe(1);
    });

    it('passes an updateData prop to <App />', () => {
        expect(typeof component.props().updateData).toBe('function');
    });
});
