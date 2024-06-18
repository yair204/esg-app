import React from 'react';
import { StyleSheet,View ,Text, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Card} from 'react-native-paper'; 
import IndexUpDown from '../IndexUpDown';



export const SmallCard = ({text,calFunc ,upwardTrend,imgUrl}) => {
    const backgroundColor  =  upwardTrend? '#98EDB1':'#FDE5F3';
    const arrowDirection =  upwardTrend? "arrow-up" :"arrow-down";
  
  return(
    <View style={styles.card}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems:'center',
            // height:20
            
          }}>
          <Text style={styles.smallCardText}>{text}</Text>
         
          <IndexUpDown calFunc={calFunc} upwardTrend={upwardTrend}/>
          <View style={{width:80,marginHorizontal:20,paddingBottom:12}}>
            <Image resizeMode='contain' style={{width:60,height:60,}} source={imgUrl}/>
          </View>
        </View>
    </View>
   
)};

const styles = StyleSheet.create({

  smallCardText:{
    fontSize:16,
    marginHorizontal:15,
    fontWeight:'600'
  },

  
  card: {
    width: '100%',

    backgroundColor:'white',
    borderRadius:16,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex:1
  },
})
