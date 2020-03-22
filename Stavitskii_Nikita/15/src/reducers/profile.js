import {PROFILE_LOAD} from 'actions/profile'

const backendData = {
    '1': {
        id: 1,
        name: 'Nikita',
        lastname: 'Stavitskii',
        age: 23
    }
}

const initialState = {
    loading: false,
    entries: {}
}

export const profileReducer = (state = initialState, action) => {
    if (action.type === PROFILE_LOAD) {
        console.log(123);
        return ({...state, entries: backendData})
    } else {
        return state;
    }
}