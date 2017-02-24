import { connect } from 'react-redux';

import BitcoinInput from './BitcoinInput';
import { updateCount } from 'services/redux/actions';

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = (dispatch) => ({
    updateCount: (count) => dispatch(updateCount(count))
});

const BitcoinInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BitcoinInput);

BitcoinInputContainer.displayName = 'BitcoinInputContainer';

export default BitcoinInputContainer;
