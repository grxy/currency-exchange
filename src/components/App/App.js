import React, { Component, PropTypes } from 'react';

import BitcoinInput from './components/BitcoinInput';
import Currencies from './components/Currencies';
import TimeTravel from './components/TimeTravel';

const { node } = PropTypes;

class App extends Component {
    static displayName = 'App'

    static propTypes = {
        children: node
    }

    render = () => (
        <div className="app">
            <TimeTravel />
            <BitcoinInput />
            <Currencies />
        </div>
    )
}

export default App;
