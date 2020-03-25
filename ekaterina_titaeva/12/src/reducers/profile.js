import { PROFILE_LOAD, } from 'actions/profile';

const dataBackend = {
    name: 'Messenger'
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
        default:
            return state;
    }
}