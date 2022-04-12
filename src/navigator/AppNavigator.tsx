import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { Home } from '../screens/Home';
import { DoctorProfileScreen } from '../screens/DoctorProfileScreen';
import { Chat } from '../screens/Chat';
import { Navigator } from './Navigator';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
        },
        cardStyle: {
            backgroundColor: '#374152'
        }
    }}>
    
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
        <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} />
        <Stack.Screen name="Chat" component={Chat} />

    </Stack.Navigator>
  )
}
