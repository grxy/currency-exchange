import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const { number, string } = PropTypes;

class ExchangePrice extends Component {
    static propTypes = {
        count: number.isRequired,
        exchange: string.isRequired,
        price: number.isRequired,
        ticker: string.isRequired
    }

    getCount = () => Number(parseFloat(this.props.count / this.props.price).toFixed(4))

    getSymbol = () => this.props.ticker.replace('BTC-', '')

    render = () => (
        <h3 className="exchange-price">{this.getCount()} {this.getSymbol()} @ {this.props.exchange}</h3>
    )
}

const mapStateToProps = ({ count }) => ({ count });

export default connect(
    mapStateToProps
)(ExchangePrice);
