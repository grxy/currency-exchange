import { connect } from 'react-redux';

import App from './App';
import { updateData } from 'services/redux/actions';

const mapDispatchToProps = (dispatch) => ({
    updateData: () => {
        dispatch(updateData());
    }
});

const AppContainer = connect(
    null,
    mapDispatchToProps
)(App);

AppContainer.displayName = 'AppContainer';

export default AppContainer;
