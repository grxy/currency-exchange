import { connect } from 'react-redux';

import ExchangePrice from './ExchangePrice';

const mapStateToProps = ({ count }) => ({ count });

const ExchangePriceContainer = connect(
    mapStateToProps
)(ExchangePrice);

ExchangePriceContainer.displayName = 'ExchangePriceContainer';

export default ExchangePriceContainer;
