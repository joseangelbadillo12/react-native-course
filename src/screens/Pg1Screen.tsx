import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any,any>{};

export const Pg1Screen = ({ navigation }: Props) => {
  return (
  
  <View style={ styles.globalMargin }>


    <Text style={ styles.title }>Página 1</Text>

    <Button
    title='Ir página 2'
    onPress={() => navigation.navigate('Page2Screen')}
    />  

    <Button
        title='Ir Damiany'
        onPress={() => navigation.navigate('Person')}
        />  
  </View>
  
  
  
  
  );
};
