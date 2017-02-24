import moment from 'moment';
import React, { Component, PropTypes } from 'react';

const { func, number } = PropTypes;

class TimeTravel extends Component {
    static displayName = 'TimeTravel'

    static propTypes = {
        index: number,
        max: number,
        timestamp: number,
        updateIndex: func
    }

    handleChange = (e) => {
        const { value } = e.target;

        this.props.updateIndex(value);
    }

    render = () => (
        <div className="time-travel">
            <h2>Slide for Time Travel ({moment(this.props.timestamp).format()})</h2>
            <input
                max={this.props.max}
                min="0"
                onChange={this.handleChange}
                type="range"
                value={this.props.index}
            />
        </div>
    )
}

export default TimeTravel;
