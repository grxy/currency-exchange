import { connect } from 'react-redux';

import Currencies from './Currencies';

const mapStateToProps = ({ data, index }) => {
    // get most recent data
    data = (data[data.length - index - 1] || {}).tickers || {};

    return {
        data,
        tickers: Object.keys(data)
    };
};

const CurrenciesContainer = connect(
    mapStateToProps
)(Currencies);

CurrenciesContainer.displayName = 'CurrenciesContainer';

export default CurrenciesContainer;
