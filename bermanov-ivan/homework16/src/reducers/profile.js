import update from 'react-addons-update';
import {
    PROFILE_LOAD, PROFILE_CHANGE
} from 'actions/profile';

const dataBackend = {
    name: 'messenger prototype',
    content: 'This is messenger prototype'
};

const initialState = {
    loading: false,
    entries: {}
};

export const profileReducers = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                entries: dataBackend
            }
        case PROFILE_CHANGE:
            return update(state, {
                entries: { $merge: {
                        name: action.payload.name,
                        content: action.payload.content
                    }
                }
            });
        default:
            return state;
    }
};
