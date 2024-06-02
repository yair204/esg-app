import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Card } from 'react-native-paper';

const CustomCard = ({
  bottomText,
  navigation,
  route,
  url,
  bgColor,
  cardCoverHigh = 150,
  withText = true,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate(route)}>
        <ImageBackground
          
          style={[styles.image]} 
          imageStyle={{ borderRadius: 16 ,resizeMode: 'center' }} 
          source={{ uri: url }}>
          {withText && (
            <Text style={[styles.cardText, { backgroundColor: bgColor }]}>
              {bottomText}
            </Text>
          )}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden', 
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: 170,
    borderRadius: 16,
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
