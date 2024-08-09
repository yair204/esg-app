import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import IndexUpDown from '../IndexUpDown';

const CustomCard = ({
  bottomText,
  navigation,
  route,
  imageUrl,
  bgColor,
  calFunc,
  upwardTrend,
  height ='auto',
  withText = true,
  padding = 10,
  width = 100,
  imgHeight = 125,
  textSize = 17
}) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor, height: height }]}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}
        onPress={() => route ? navigation.navigate(route) : undefined}
        >
        <View style={[styles.imageContainer, {width: width,height: imgHeight}]}>
          <Image resizeMode='contain' style={styles.image} source={imageUrl} />
         {upwardTrend && <View style={styles.indexUpDownContainer}>
            <IndexUpDown calFunc={calFunc} upwardTrend={upwardTrend} />
          </View>}
        </View>
        {withText && (
          <Text style={[styles.cardText, { backgroundColor: bgColor ,padding: padding ,fontSize: textSize}]}>
            {bottomText}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    paddingTop: 10,
   
  },
  imageContainer: {
   
    justifyContent: 'center',
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  indexUpDownContainer: {
    position: 'absolute',
    top: 0,
    left: 40,
    right: 0,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#464646',
    textAlign: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    fontWeight:'500'
  },
});

export default CustomCard;
