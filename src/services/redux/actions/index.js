import { createAction } from 'redux-actions';

const updateCount = createAction('UPDATE_COUNT');
const updateIndex = createAction('UPDATE_INDEX');

export { updateCount, updateIndex };
