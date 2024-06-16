import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Bar } from '../Bar';
import { Line } from '../Line';

export const DataCard = ({date1,date2,date3,date4,val1,val2,val3,val4,isCost}) => {
    return(
        <View style={styles.bigCardContainer}>
        <TouchableOpacity style={styles.bigCard}>
          <View style={styles.lineContainer}>
            <Line number={20} isCost={isCost} />
            <Line number={15} isCost={isCost}/>
            <Line number={10} isCost={isCost}/>
            <Line number={5} isCost={isCost}/>
          </View>
          <View style={styles.barContainer}>
            <Bar height={val1} date={date1} />
            <Bar height={val2} date={date2} />
            <Bar height={val3} date={date3} />
            <Bar height={val4} date={date4} />
          </View>
        </TouchableOpacity>
      </View>
    )
};

export const styles = StyleSheet.create({
   
    lineContainer: {
      // flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
    },
  
    bigCardContainer: {
      flex: 1,
      
    },
    bigCard: {
      backgroundColor: '#F9F8F8',
      borderRadius: 16,
      // padding: 10,
      paddingVertical: 20,
      // margin: 10,
      elevation: 2,
      width: '100%',
      height: 315,
    },
    barContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexDirection: 'row-reverse',
        paddingBottom: '7%',
        marginLeft: 74,
        gap: 30,
    
      },
   
  });
  