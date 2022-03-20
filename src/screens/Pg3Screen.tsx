import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';


interface Props extends StackScreenProps<any,any>{};

export const Pg3Screen = ({ navigation }: Props) => {
  
  useEffect(() => {
    
    navigation.setOptions({
      headerTitle: 'Página 2',
      headerBackTitle: '',
    });
    
  }, [])
  
  return (
  
  <View style={ styles.globalMargin}> 

    <Text style={ styles.title }>Página 3</Text>

    <Button
    title='Go back'
    onPress={() => navigation.pop()}
    />


    <Button
        title='Ir a página 1'
        onPress={() => navigation.popToTop()}
        />
  </View>
  
  
  )
} 
