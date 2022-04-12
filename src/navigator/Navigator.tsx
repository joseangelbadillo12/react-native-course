import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../context/AuthContext';

import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Home } from '../screens/Home';
import { AppNavigator } from './AppNavigator';


const Stack = createStackNavigator();

export const Navigator = () => {

  const { status } = useContext( AuthContext );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      {
        (status !== 'authenticated') && ( <Stack.Screen name="Loading" component={LoadingScreen} /> )
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={ LoginScreen } />
              <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
            </>
          )
          : (
          <> 
            <Stack.Screen name="AppNavigator" component={ AppNavigator } />
            <Stack.Screen name="Home" component={ Home } />
          </>
          )
          
      }

    </Stack.Navigator>
  );
}