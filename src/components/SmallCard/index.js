import React from 'react';
import { StyleSheet,View ,Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-paper'; 



export const SmallCard = ({text,calFunc ,upwardTrend}) => {
    const backgroundColor  =  upwardTrend? '#98EDB1':'#FDE5F3';
    const arrowDirection =  upwardTrend? "arrow-up" :"arrow-down";
  
  return(
    <Card style={styles.card}>
      <Card.Content>
        <View
          style={{
            width: '90%',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            
          }}>
          <Text style={styles.smallCardText}>{text}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor:backgroundColor,
              borderRadius:10,
              width:'20%'
            }}>
            <Text>{calFunc}</Text>
            <FontAwesome5 name={arrowDirection} size={15} />
          </View>
        </View>
      </Card.Content>
    </Card>
   
)};

const styles = StyleSheet.create({

  smallCardText:{
    fontSize:16
  },

  
  card: {
    width: '100%',
    backgroundColor:'#F9F8F8',
    borderRadius:16,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
