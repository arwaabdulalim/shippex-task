import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/login/Login';
import Scan from '../../screens/profile/Profile';
import Wallet from '../../screens/wallet/Wallet';
import Profile from '../../screens/profile/Profile';
import HomeTabNav from './HomeTabNav';
import Shipments from '../../screens/shipments/Shipments';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeTabNav}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Shipments"
          component={Shipments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
