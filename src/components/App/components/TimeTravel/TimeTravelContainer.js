import { connect } from 'react-redux';

import TimeTravel from './TimeTravel';
import { updateIndex } from 'services/redux/actions';

const mapStateToProps = ({ data, index }) => ({
    index,
    max: data.length - 1,
    timestamp: (data[data.length - index - 1] || {}).timestamp
});

const mapDispatchToProps = (dispatch) => ({
    updateIndex: (index) => dispatch(updateIndex(index))
});

const TimeTravelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeTravel);

TimeTravelContainer.displayName = 'TimeTravelContainer';

export default TimeTravelContainer;
