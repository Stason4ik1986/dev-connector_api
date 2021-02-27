import {
    LOGOUT,
    AUTH_ERROR,
    LOGIN_FAIL,
    USER_LOADED,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    ACCOUNT_DELETED,
} from '../actions/types';

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    loading: true,
    isAuthenticated: null,
};

const auth = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                user: payload,
                loading: false,
                isAuthenticated: true,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);

            return {
                ...state,
                ...payload,
                loading: false,
                isAuthenticated: true,
            };
        case LOGOUT:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case ACCOUNT_DELETED:
            localStorage.removeItem('token');

            return {
                ...state,
                token: null,
                loading: false,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default auth;
