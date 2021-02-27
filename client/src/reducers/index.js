import { combineReducers } from 'redux';
import auth from './auth';
import post from './post';
import alert from './alert';
import profile from './profile';

export default combineReducers({
    auth,
    post,
    alert,
    profile,
});
