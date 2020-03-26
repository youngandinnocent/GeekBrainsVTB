import { createAction } from 'redux-api-middleware';
export const PROFILE_LOAD = 'PROFILE_LOAD';
export const PROFILE_REQUEST = 'PROFILE_LOAD/PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_LOAD/PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_LOAD/PROFILE_FAILURE';

export const profileLoad = () => ({
    type: PROFILE_LOAD
});

export const profileLoad2 = () => createAction({
    endpoint: '/api/profile.json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
        PROFILE_REQUEST,
        PROFILE_SUCCESS,
        PROFILE_FAILURE,
    ],
});