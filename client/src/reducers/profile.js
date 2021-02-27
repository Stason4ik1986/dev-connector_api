import { NO_REPOS, GET_REPOS, GET_PROFILE, GET_PROFILES, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
    error: {},
    repos: [],
    loading: true,
    profile: null,
    profiles: [],
};

const profile = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false,
            };
        case NO_REPOS:
            return {
                ...state,
                repos: [],
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                repos: [],
                profile: null,
                loading: false,
            };
        default:
            return state;
    }
};

export default profile;
