import React from 'react';
import {useSelector} from 'react-redux';
import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

export default function Routes() {
  const userInf = useSelector(({userStore}: any) => userStore);
  return userInf.name ? <AppRoutes /> : <AuthRoutes />;
}
