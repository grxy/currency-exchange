import { shallow } from 'enzyme';
import React from 'react';

import Html from './Html';

describe('<Html />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            children: '<script></script>',
            initialState: {
                test: Math.random()
            }
        };

        wrapper = shallow(<Html {...props} />);
    });

    it('renders an <html />', () => {
        expect(wrapper.is('html')).toBe(true);
    });

    it('renders the <head />', () => {
        expect(wrapper.contains(
            <head>
                <title>Currency Exchange</title>
            </head>
        )).toBe(true);
    });

    describe('<body />', () => {
        let body;

        beforeEach(() => {
            body = wrapper.find('body');
        });

        it('renders the children within div#app', () => {
            expect(body.contains(
                <div dangerouslySetInnerHTML={{ __html: props.children }} id="app" />
            )).toBe(true);
        });

        it('renders the initial state', () => {
            expect(body.contains(
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}`
                    }}
                    id="initial-state"
                />
            )).toBe(true);
        });

        it('renders a script tag to load the app', () => {
            expect(body.contains(
                <script src="/public/app.js" type="text/javascript"></script>
            )).toBe(true);
        });
    });
});
