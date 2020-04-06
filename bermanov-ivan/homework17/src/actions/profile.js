export const PROFILE_LOAD = 'PROFILE_LOAD';
export const PROFILE_CHANGE = 'PROFILE_CHANGE';

export const profileLoad = () => ({
    type: PROFILE_LOAD
});

export const profileChange = (name) => ({
    type: PROFILE_CHANGE,
    payload: name
});
