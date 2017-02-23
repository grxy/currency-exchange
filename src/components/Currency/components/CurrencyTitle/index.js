import React, { Component, PropTypes } from 'react';

const { string } = PropTypes;

class CurrencyTitle extends Component {
    static propTypes = {
        ticker: string.isRequired
    }

    render = () => (
        <h2>{this.props.ticker.replace('BTC-', '')}</h2>
    )
}

export default CurrencyTitle;
