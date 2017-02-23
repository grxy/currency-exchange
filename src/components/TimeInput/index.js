import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateIndex } from 'services/redux/actions';

const { func, number } = PropTypes;

class TimeInput extends Component {
    static propTypes = {
        index: number.isRequired,
        max: number.isRequired,
        timestamp: number.isRequired,
        updateIndex: func.isRequired
    }

    handleChange = (e) => {
        const { value } = e.target;

        this.props.updateIndex(value);
    }

    render = () => (
        <div className="time-input">
            <h2>Slide for Time Travel ({moment(this.props.timestamp).format()})</h2>
            <input
                className="time-input"
                max={this.props.max}
                min="0"
                onChange={this.handleChange}
                type="range"
                value={this.props.index}
            />
        </div>
    )
}

const mapStateToProps = ({ data, index }) => ({
    index,
    max: data.length - 1,
    timestamp: (data[data.length - index - 1] || {}).timestamp || 0
});

const mapDispatchToProps = (dispatch) => ({
    updateIndex: (count) => dispatch(updateIndex(count))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeInput);
