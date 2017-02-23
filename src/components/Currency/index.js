import React, { Component, PropTypes } from 'react';

import BestExchange from './components/BestExchange';
import CurrencyTitle from './components/CurrencyTitle';
import ExchangePrice from 'components/ExchangePrice';

const { object, string } = PropTypes;

class Currency extends Component {
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

            if (a.exchange > b.exchange) {
                return 1;
            }

            return 0;
        });
    }

    getValue = (num) => Number(parseFloat(num).toFixed(6))

    render = () => (
        <div className="currency">
            <CurrencyTitle ticker={this.props.ticker} />
            {this.renderExchanges()}
            <BestExchange exchanges={this.getExchanges()} />
        </div>
    )

    renderExchange = (exchange, index) => (
        <ExchangePrice key={index} {...exchange} />
    )

    renderExchanges = () => this.getExchanges().map(this.renderExchange)
}

export default Currency;
