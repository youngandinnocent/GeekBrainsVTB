import update from 'react-addons-update';
import { handleActions } from 'redux-actions';
import {
    profileChange,
    profileRequest,
    profileSuccess,
    profileFailure
} from 'actions/profile';

const initialState = {
    loading: false,
    error: false,
    entries: {}
};

export const profileReducers = handleActions({
    [profileRequest]: (state, action) => {
        return {
            ...state,
            loading: true,
            error: false
        };
    },
    [profileSuccess]: (state, action) => {
        return {
            ...state,
            loading: false,
            entries: action.payload
        };
    },
    [profileFailure]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: true
        };
    },
    [profileChange]: (state, action) => {
        return update(state, {
            entries: { $merge: {
                    name: action.payload.name,
                    content: action.payload.content
                }
            }
        });
    }
}, initialState);
