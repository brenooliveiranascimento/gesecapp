import {REGISTER_USER} from '../types/types';

const setUserStore = userInf => ({
  type: REGISTER_USER,
  payload: userInf,
});

export const registeuser = userInf => async () => {
  try {
  } catch (error: error) {
    console.log(error.message);
  }
};
