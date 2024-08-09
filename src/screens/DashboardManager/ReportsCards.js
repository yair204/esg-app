import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import IndexUpDown from '../../components/IndexUpDown';
import { routes } from '../../router/routes';

export const ReportCard = ({calFunc, upwardTrend, imgSrc, text,navigation,routes}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(routes)}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent:'space-around'}}>
        <View style={styles.upHalf}>
          <View style={styles.imgContainer}>
            <Image
              style={{ width: 50, height: 50}}
              resizeMode="contain"
              source={imgSrc}
            />
          </View>
        </View>
        {/* <View style={styles.mediumHalf}>
          <IndexUpDown calFunc={calFunc} upwardTrend={upwardTrend} />
        </View> */}
        <View style={styles.downHalf}>
          <Text numberOfLines={2} style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  upHalf: {
    flex: 0.5,
  },
  mediumHalf: {
    flex: 1,
    width: '50%',
  },
  downHalf: {
    width: '50%',
    
  },
  imgContainer: {
    height: 50,
    width: 50,
    
  },
  container: {
    backgroundColor: '#F9F8F8',
    borderRadius: 16,
    paddingVertical: 10,
    // marginHorizontal: 10,
    elevation: 2,
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 17,
    color: '#464646',
    fontWeight: '600',
    textAlign: 'left',
    },
});
