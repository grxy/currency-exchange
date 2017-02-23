import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateCount } from 'services/redux/actions';

const { func, number } = PropTypes;

class BitcoinInput extends Component {
    static propTypes = {
        count: number.isRequired,
        updateCount: func.isRequired
    }

    handleChange = (e) => {
        const { value } = e.target;

        this.props.updateCount(value);
    }

    render = () => (
        <h1>
            <span>I have</span>
            <input onChange={this.handleChange} type="number" value={this.props.count} />
            <span>BTC</span>
        </h1>
    )
}

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = (dispatch) => ({
    updateCount: (count) => dispatch(updateCount(count))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BitcoinInput);
