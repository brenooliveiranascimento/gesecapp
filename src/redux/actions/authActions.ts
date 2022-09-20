import {REGISTER_USER} from '../types/types';
import auth from '@react-native-firebase/auth';
import {formInfType, userInfType} from '../reduxTypes/reduxTypes';
import {createUserData} from '../../services/userAutentication';
import {Dispatch} from 'react';

const setUserStore = (userInf: userInfType) => ({
  type: REGISTER_USER,
  payload: userInf,
});

export const registeuser = (userInf: formInfType): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const createAccount = await auth().createUserWithEmailAndPassword(
        userInf.email,
        userInf.password,
      );
      const uid = await createAccount.user.uid;
      const userData: userInfType = {
        name: userInf.name,
        email: userInf.email,
        uid,
      };
      createUserData(userData);
      console.log(userData);
      dispatch(setUserStore(userData));
    } catch (error: any) {
      console.log(error);
    }
  };
};
