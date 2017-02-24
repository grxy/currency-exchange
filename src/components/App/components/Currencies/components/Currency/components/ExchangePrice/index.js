import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CurrencySymbol from '../CurrencySymbol';

const { number, string } = PropTypes;

class ExchangePrice extends Component {
    static propTypes = {
        count: number.isRequired,
        exchange: string.isRequired,
        price: number.isRequired,
        ticker: string.isRequired
    }

    getCount = () => Number(parseFloat(this.props.count / this.props.price).toFixed(4))

    render = () => (
        <div className="exchange-price">
            Trade at {this.props.exchange} for {this.getCount()} <CurrencySymbol ticker={this.props.ticker} />
        </div>
    )
}

const mapStateToProps = ({ count }) => ({ count });

export default connect(
    mapStateToProps
)(ExchangePrice);
