import { PROFILE_LOAD, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE } from 'actions/profile';

const dataBackend = {
    name: 'Екатерина'
};

const initialState = {
    name: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOAD:
            return {
                ...state,
                name: dataBackend.name
            }
        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}