import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pg1Screen } from '../screens/Pg1Screen';
import { Pg2Screen } from '../screens/Pg2Screen';
import { Pg3Screen } from '../screens/Pg3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        }, 
        cardStyle: {
          backgroundColor: 'white',
        }
      }}
    
    >
      <Stack.Screen name="Page1Screem" options={{ title: "Página 1"}}component={ Pg1Screen } />
      <Stack.Screen name="Page2Screen" options={{ title: "Página 2"}}component={ Pg2Screen } />
      <Stack.Screen name="Page3Screen" options={{ title: "Página 3"}}component={ Pg3Screen } />
    <Stack.Screen name="Person" component={ PersonaScreen } />
    </Stack.Navigator>
  );
}