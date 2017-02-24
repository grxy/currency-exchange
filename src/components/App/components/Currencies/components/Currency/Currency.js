import React, { Component, PropTypes } from 'react';

import BestExchange from './components/BestExchange';
import CurrencySymbol from './components/CurrencySymbol';
import ExchangePrice from './components/ExchangePrice';

const { object, string } = PropTypes;

class Currency extends Component {
    static displayName = 'Currency'

    static propTypes = {
        data: object.isRequired,
        ticker: string.isRequired
    }

    getExchanges = () => {
        const exchanges = [];

        for (const exchange in this.props.data) {
            exchanges.push({
                exchange,
                price: this.props.data[exchange],
                ticker: this.props.ticker
            });
        }

        return exchanges.sort((a, b) => {
            if (a.exchange < b.exchange) {
                return -1;
            }

            return 1;
        });
    }

    render = () => {
        const exchanges = this.getExchanges();

        return (
            <div className="currency">
                <CurrencySymbol ticker={this.props.ticker} />
                {exchanges.map(this.renderExchange)}
                <BestExchange exchanges={exchanges} ticker={this.props.ticker} />
            </div>
        );
    }

    renderExchange = (exchange, index) => (
        <ExchangePrice key={index} {...exchange} />
    )
}

export default Currency;
