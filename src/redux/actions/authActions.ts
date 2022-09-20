/* eslint-disable no-alert */
import {REGISTER_USER, SIGIN_USER} from '../types/types';
import auth from '@react-native-firebase/auth';
import {formInfType, userInfType} from '../reduxTypes/reduxTypes';
import {createUserData, fetchUserData} from '../../services/userAutentication';
import {Dispatch} from 'react';

const setUserStore = (userInf: userInfType, type: string) => ({
  type,
  payload: userInf,
});

export const register_user = (userInf: formInfType): any => {
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
      dispatch(setUserStore(userData, REGISTER_USER));
    } catch (error: any) {
      alert(error.message);
    }
  };
};

export const sigin_User = (email: string, password: string): any => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const sigin = await auth().signInWithEmailAndPassword(email, password);
      const uid = await sigin.user.uid;
      const userData: any = await fetchUserData(uid);
      console.log(userData);
      dispatch(setUserStore(userData, SIGIN_USER));
    } catch (error: any) {
      alert(error.message);
    }
  };
};

function alert(errorMessage: string) {
  throw new Error(errorMessage);
}
