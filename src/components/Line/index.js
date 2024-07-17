import React from 'react';
import {
  View,Text
} from 'react-native';

export const Line = ({number, isCost,measure}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 20,
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            width: '70%',
            borderBottomColor: '#EAEAEA',
          }}></View>
        <View style={{flexDirection: 'row', gap: 1.5,justifyContent:'flex-end',width:60}}>
          <Text style={{fontWeight: 600, color: '#464646',alignItems:'flex-end'}}>{number}</Text>
          {isCost ? (
            <Text style={{fontWeight: 600, color: '#464646',fontSize:15}}>₪</Text>
          ) :measure=== "electric"?  (
            <Text style={{fontWeight: 600, color: '#464646'}}>Kwh</Text>
          ):measure=== "gas"? (
            <Text style={{fontWeight: 600, color: '#464646'}}>L</Text>
          ) : (
            <Text style={{fontWeight: 600, color: '#464646'}}>M3</Text>
          ) 
        }
        </View>
      </View>
    );
  };
  