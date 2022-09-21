import {combineReducers} from 'redux';
import {userStore} from './userReducer/userStore';
import {recipesReducer} from './recipesReducer/recipesReducer';

const rootReducer = combineReducers({
  userStore,
  recipesReducer,
});

export default rootReducer;
