import React, { Component, PropTypes } from 'react';

import CurrencySymbol from '../CurrencySymbol';

const { number, string } = PropTypes;

class ExchangePrice extends Component {
    static displayName = 'ExchangePrice'

    static propTypes = {
        count: number,
        exchange: string,
        price: number,
        ticker: string
    }

    getCount = () => Number(parseFloat(this.props.count / this.props.price).toFixed(4))

    render = () => (
        <div className="exchange-price">
            Trade at {this.props.exchange} for {this.getCount()} <CurrencySymbol ticker={this.props.ticker} />
        </div>
    )
}

export default ExchangePrice;
