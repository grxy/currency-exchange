import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Currency from 'components/Currency';

const { array, object } = PropTypes;

class Currencies extends Component {
    static propTypes = {
        data: object.isRequired,
        tickers: array.isRequired
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

const mapStateToProps = ({ data, index }) => {
    // get most recent data
    data = (data[data.length - index - 1] || {}).tickers || {};

    return {
        data,
        tickers: Object.keys(data)
    };
};

export default connect(
    mapStateToProps
)(Currencies);
