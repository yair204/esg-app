
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DropdownComponent from '../../../components/DropDown';
export const Controller = ({pressedButton,handlePress ,bgColor1,bgColor2 ,title}) =>{
    return(
        <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20}}>{title}</Text>
          <View style={{width: '30%'}}>
            <DropdownComponent />
          </View>
        </View>
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => handlePress('cost')}
            style={({}) => [
              {
                backgroundColor:
                   pressedButton === 'cost' ? bgColor1 :bgColor2
                   
              },
              styles.wrapperCustom,
            ]}>
            <Text style={styles.text}>{'עלות'}</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress('quantity')}
            style={({}) => [
              {
                backgroundColor:
                   pressedButton === 'quantity'
                    ? bgColor1 :bgColor2
              },
              styles.wrapperCustom,
            ]}>
            <Text style={styles.text}>{'כמות'}</Text>
          </Pressable>
        </View>
      </View>
    )
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
 
  text: {
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    gap: 25,
  },
  wrapperCustom: {
    width: '15%',
    borderRadius: 12,
    padding: 6,
  },
});