import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

import BitcoinInput from './components/BitcoinInput';
import Currencies from './components/Currencies';
import TimeTravel from './components/TimeTravel';

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders a div.app', () => {
        expect(wrapper.is('div.app')).toBe(true);
    });

    it('renders a <BitcoinInput />', () => {
        expect(wrapper.contains(<BitcoinInput />)).toBe(true);
    });

    it('renders a <Currencies />', () => {
        expect(wrapper.contains(<Currencies />)).toBe(true);
    });

    it('renders a <TimeTravel />', () => {
        expect(wrapper.contains(<TimeTravel />)).toBe(true);
    });
});
