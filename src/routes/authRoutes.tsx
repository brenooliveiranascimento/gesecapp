/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../pages/Auth/Auths';

export default function AuthRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Auths Form"
        component={Auth}
      />
    </Stack.Navigator>
  );
}
