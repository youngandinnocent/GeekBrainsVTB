import update from 'react-addons-update';
import {
    PROFILE_CHANGE,
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE
} from 'actions/profile';

const initialState = {
    loading: false,
    entries: {}
};

export const profileReducers = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_CHANGE:
            return update(state, {
                entries: { $merge: {
                        name: action.payload.name,
                        content: action.payload.content
                    }
                }
            });
        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload
            };
        case PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};
