import firestore from '@react-native-firebase/firestore';
import {userInfType} from '../redux/reduxTypes/reduxTypes';

export const createUserData = async (userData: userInfType) => {
  await firestore()
    .collection('users')
    .doc(userData.uid)
    .set({...userData});
};
