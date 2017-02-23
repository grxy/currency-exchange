import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import BitcoinInput from 'components/BitcoinInput';
import Currencies from 'components/Currencies';
import TimeInput from 'components/TimeInput';

const { node } = PropTypes;

class App extends Component {
    static propTypes = {
        children: node
    }

    render = () => (
        <div className="app">
            <Helmet
                defaultTitle="Currency Exchange"
                meta={[
                    {
                        content: 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0',
                        name: 'viewport'
                    }
                ]}
                titleTemplate="%s | Currency Exchange"
            />
            <TimeInput />
            <BitcoinInput />
            <Currencies />
        </div>
    )
}

export default App;
