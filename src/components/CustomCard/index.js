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
  withText = true,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
        onPress={() => navigation.navigate(route)}>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.image} source={imageUrl} />
         {upwardTrend && <View style={styles.indexUpDownContainer}>
            <IndexUpDown calFunc={calFunc} upwardTrend={upwardTrend} />
          </View>}
        </View>
        {withText && (
          <Text style={[styles.cardText, { backgroundColor: bgColor }]}>
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
  },
  imageContainer: {
    width: 70,
    height: 100,
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
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#464646',
    textAlign: 'center',
    fontSize: 17,
    padding: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default CustomCard;
