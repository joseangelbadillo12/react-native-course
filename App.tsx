import 'react-native-gesture-handler'
import React from 'react';
import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
 
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor='white'
      />
          <StackNavigator />
    </NavigationContainer>
    );
};
export  default App;