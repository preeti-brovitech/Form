/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/modules/LoginScreen';
import SignUpScreen from './src/modules/SignUpScreen';
import DashboardScreen from './src/modules/DashboardScreen';
import { WebComponent } from './src/modules/WebComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="brovitech" component={WebComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

