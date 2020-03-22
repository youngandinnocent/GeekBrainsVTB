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

export const profileReducer = (state = initialState) => {
    return ({...state, entries: backendData})
}