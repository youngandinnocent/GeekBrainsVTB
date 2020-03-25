import {
  LOAD_PROFILES
} from "../actions/profileActions.js";

const dataBackend = {
  '1': {
    name: 'ILya',
    lastname: 'Lipakov',
    hobby: 'programming'
  }
};

const initialState = {
  entries: {},
  loading: true
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILES:
      return {
        ...state,
        entries: dataBackend,
        loading: false
      };
    default:
      return state
  }
};