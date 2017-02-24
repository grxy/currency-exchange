import React, { Component, PropTypes } from 'react';

import CurrencySymbol from '../CurrencySymbol';
import ExchangePrice from '../ExchangePrice';

const { array, string } = PropTypes;

class BestExchange extends Component {
    static propTypes = {
        exchanges: array.isRequired,
        ticker: string.isRequired
    }

    getBestExchange = () => {
        let best = {
            price: Infinity
        };

        this.props.exchanges.forEach((exchange) => {
            if (exchange.price < best.price) {
                best = exchange;
            }
        });

        return best;
    }

    render = () => (
        <div className="best-exchange">
            <h2>Best Exchange for <CurrencySymbol ticker={this.props.ticker} /></h2>
            <ExchangePrice {...this.getBestExchange()} />
        </div>
    )
}

export default BestExchange;
