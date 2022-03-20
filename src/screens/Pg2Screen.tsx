import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

export const Pg2Screen = ({ navigation } : Props) => {
  
  useEffect(() => {
    
    navigation.setOptions({
      headerTitle: 'Página 2',
      headerBackTitle: '',
    });
    
  }, [])
  
  return (
  
  <View style={ styles.globalMargin }>

    <Text style={ styles.title } >Página 2</Text>

    <Button
      title='Ir a página 3'
      onPress={ () => navigation.navigate('Page3Screen') }
    />
  </View>
  
  )
} 
