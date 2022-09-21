import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Routes from './src/routes';

export default function App() {
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
