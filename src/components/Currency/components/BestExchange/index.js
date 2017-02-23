import React, { Component, PropTypes } from 'react';

import ExchangePrice from 'components/ExchangePrice';

const { array } = PropTypes;

class BestExchange extends Component {
    static propTypes = {
        exchanges: array.isRequired
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
            <h2>Best Exchange</h2>
            <ExchangePrice {...this.getBestExchange()} />
        </div>
    )
}

export default BestExchange;
