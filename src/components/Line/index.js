import React from 'react';
import {
  View,Text
} from 'react-native';

export const Line = ({number, isCost}) => {
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
        <View style={{flexDirection: 'row-reverse', gap: 10}}>
          <Text style={{fontWeight: 600, color: '#464646'}}>{number}{'k'}</Text>
          {isCost ? (
            <Text style={{fontWeight: 600, color: '#464646'}}>שח</Text>
          ) : (
            <Text style={{fontWeight: 600, color: '#464646'}}>KV</Text>
          )}
        </View>
      </View>
    );
  };
  