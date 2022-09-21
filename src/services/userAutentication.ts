import firestore from '@react-native-firebase/firestore';
import {userInfType} from '../redux/reduxTypes/reduxTypes';

export const registerUserInDatabase = async (userData: userInfType) => {
  await firestore()
    .collection('users')
    .doc(userData.uid)
    .set({...userData});
};

export const fetchUserData = async (uid: string) => {
  const userData = await firestore().collection('users').doc(uid).get();
  return userData.data();
};
