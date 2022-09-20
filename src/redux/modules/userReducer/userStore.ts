import {userType} from '../../reduxTypes/reduxTypes';
import {REGISTER_USER, SIGIN_USER, SIGNOUT_USER} from '../../types/types';

const userInitialValue: userType = {
  name: '',
  email: '',
  uid: '',
};

export function userStore(state = userInitialValue, action: any) {
  switch (action.type) {
    case SIGIN_USER:
      return {...state};
    case SIGNOUT_USER:
      return {...state};
    case REGISTER_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload,
        uid: action.payload.uid,
      };
    default:
      return state;
  }
}
