import {userType} from '../../reduxTypes/reduxTypes';
import {REGISTER_USER, SIGIN_USER, SIGNOUT_USER} from '../../types/types';

const userInitialValue: userType = {
  name: '',
  email: '',
  idade: 0,
};

const actionInitialValue = {
  type: '',
  payload: {},
};

export function userStore(
  state = userInitialValue,
  action = actionInitialValue,
) {
  switch (action.type) {
    case SIGIN_USER:
      return {...state};
    case SIGNOUT_USER:
      return {...state};
    case REGISTER_USER:
      return {...state};
    default:
      return state;
  }
}
