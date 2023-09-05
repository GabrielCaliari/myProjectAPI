import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../pages/HomeScreen';
import {SettingScreen} from '../pages/SettingScreen';

// interface App

export interface AppParamList {
  Home: undefined;
  Settings: undefined;
}
const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
}
