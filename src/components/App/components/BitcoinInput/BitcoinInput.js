import React, { Component, PropTypes } from 'react';

const { func, number } = PropTypes;

class BitcoinInput extends Component {
    static displayName = 'BitcoinInput'

    static propTypes = {
        count: number,
        updateCount: func
    }

    handleChange = (e) => {
        const { value } = e.target;

        this.props.updateCount(value);
    }

    render = () => (
        <h1 className="bitcoin-input">
            <span>I have</span>
            <input onChange={this.handleChange} type="number" value={this.props.count} />
            <span>BTC</span>
        </h1>
    )
}

export default BitcoinInput;
