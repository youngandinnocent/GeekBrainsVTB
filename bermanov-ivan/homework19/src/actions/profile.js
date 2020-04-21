export const PROFILE_CHANGE = 'PROFILE_CHANGE';
export const PROFILE_REQUEST = 'CHATS_LOAD/PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'CHATS_LOAD/PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'CHATS_LOAD/PROFILE_FAILURE';

export const profileChange = (data) => ({
    type: PROFILE_CHANGE,
    payload: data
});

export const profileLoadRequest = () => ({
    type: PROFILE_REQUEST
});

export const profileLoadSuccess = (data) => ({
    type: PROFILE_SUCCESS,
    payload: data
});

export const profileLoadFailure = (error) => ({
    type: PROFILE_FAILURE,
    payload: error
});

export const profileLoad = () => {
    return async (dispatch) => {
        try {
            dispatch(profileLoadRequest());
            const result = (await fetch('/api/profile.json'));
            dispatch(profileLoadSuccess(await result.json()));
        } catch (error) {
            dispatch(profileLoadFailure(error));
        }
    };
};
