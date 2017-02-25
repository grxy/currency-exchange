import { get } from 'axios';
import { createAction } from 'redux-actions';

import { PORT_API } from 'services/constants';

const updateCount = createAction('UPDATE_COUNT');

const updateData = createAction('UPDATE_DATA', async () => {
    try {
        const { data } = await get(`http://localhost:${PORT_API}/api`);

        return data;
    } catch (err) {
        // eslint-disable-next-line
        console.log('An error occurred while fetching the latest data.', err);
    }
});

const updateIndex = createAction('UPDATE_INDEX');

export { updateCount, updateData, updateIndex };
