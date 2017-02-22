import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const { object, string } = PropTypes;

class Currency extends Component {
    static propTypes = {
        data: object,
        currency: string
    }

    getData = () => {
        const { data } = this.props;
        const output = [];

        for (const timestamp in data) {
            const value = {
                data: [],
                timestamp
            };

            for (const exchange in data[timestamp]) {
                value.data.push({
                    exchange,
                    value: data[timestamp][exchange][this.props.currency]
                });
            }

            output.push(value);
        }

        return output;
    }

    render = () => (
        <div className="currency">
            <h2>{this.props.currency}</h2>
            {this.renderExchanges()}
        </div>
    )

    renderExchange = (currency, i) => (
        <h3 key={i}>{currency.exchange} - {currency.value}</h3>
    )

    renderExchanges = () => this.getData()[0].data.map(this.renderExchange)
}

const mapStateToProps = ({ data }) => ({ data });

export default connect(
    mapStateToProps
)(Currency);
