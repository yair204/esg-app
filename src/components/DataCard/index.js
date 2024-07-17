import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Bar } from '../Bar';
import { Line } from '../Line';

export const DataCard = ({ date1, date2, date3, date4, val1, val2, val3, val4, isCost,measure }) => {
  return (
    <View style={styles.bigCardContainer}>
      <TouchableOpacity style={styles.bigCard}>
        <View style={styles.lineContainer}>
          <Line number={1000} isCost={isCost} measure={measure} />
          <Line number={500} isCost={isCost} measure={measure}/>
          <Line number={100} isCost={isCost} measure={measure}/>
          <Line number={0} isCost={isCost} measure={measure}/>
        </View>
        <View style={styles.barContainer}>
          <Bar height={val1} date={date1} />
          <Bar height={val2} date={date2} />
          <Bar height={val3} date={date3} />
          <Bar height={val4} date={date4} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
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
    paddingVertical: 20,
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
