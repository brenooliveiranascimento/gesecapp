import {combineReducers} from 'redux';
import {userStore} from './userReducer/userStore';

const rootReducer = combineReducers({
  userStore,
});

export default rootReducer;
