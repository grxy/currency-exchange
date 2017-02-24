import React, { Component, PropTypes } from 'react';

import Currency from './components/Currency';

const { array, object } = PropTypes;

class Currencies extends Component {
    static displayName = 'Currencies'

    static propTypes = {
        data: object,
        tickers: array
    }

    render = () => (
        <div className="currencies">
            {this.props.tickers.map(this.renderCurrency)}
        </div>
    )

    renderCurrency = (ticker, index) => (
        <Currency data={this.props.data[ticker]} key={index} ticker={ticker} />
    )
}

export default Currencies;
