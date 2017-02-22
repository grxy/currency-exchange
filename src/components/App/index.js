import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Currency from 'components/Currency';

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
            <h1>Currency Exchange</h1>
            {this.props.children}
            <Currency currency="BTC-DASH" />
            <Currency currency="BTC-ETH" />
            <Currency currency="BTC-LTC" />
        </div>
    )
}

export default App;
