import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any,any>{};


export const PersonaScreen = ({ navigation }: Props) => {
  
    useEffect(() => {
    
        navigation.setOptions({
          headerTitle: 'Damiany',
          headerBackTitle: '',
        });
        
      }, [])
  
    return (
  
  <View style={ styles.globalMargin }>


  </View>
    
  )
}
