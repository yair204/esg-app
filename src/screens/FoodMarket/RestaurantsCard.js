import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import { calculateDistance ,calculateTravelTime} from '../../utils/calculateDistance';

const RestaurantCard = ({restaurant,imgUrl, location}) => {
  const toFixedWithoutZeros = (num) =>{
    return  parseFloat(num);
  }
  const distance = calculateDistance(restaurant?.latitude,restaurant?.longitude,location?.coords.latitude,location?.coords.longitude)
  
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={imgUrl} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{toFixedWithoutZeros(restaurant.rating)}</Text>
            <Icon name="thumbs-up" type="font-awesome" color="#F991CC" size={14} />
          </View>
        </View>
        <View style={styles.typeCon}>
          <Text style={styles.type}>{restaurant.type}</Text>
        </View>

        <View style={styles.timeCon}>
          <Text style={styles.pickupTime}>{restaurant.close_hour}</Text>
          <Text style={styles.pickupTime}>{restaurant.open_hour}</Text>
        </View>

        <View style={styles.distanceContainer}>
           <Icon name="location-on" size={14} color="#000" />
          <Text style={styles.distance}>{calculateDistance(restaurant?.latitude,restaurant?.longitude,location?.coords.latitude,location?.coords.longitude)} km</Text>
          <Icon name="bicycle" type="font-awesome" size={14} color={'#000'} />
          <Text style={styles.time}>{calculateTravelTime(distance, 'bicycling')} דק</Text>
          <Icon name="car" type="font-awesome" size={14} />
          <Text style={styles.time}>{calculateTravelTime(distance, 'driving')} דק</Text>
          <Icon name="directions-walk" type="material" size={14} />
          <Text style={styles.time}>{calculateTravelTime(distance, 'walking')} דק</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 40,
    elevation: 2,
    marginHorizontal: 10,
    width: 290,
    // height: 290,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 160,
  },
  typeCon: {
    flexDirection: 'row-reverse',
  },
  detailsContainer: {
    padding: 10,
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: '#464646',
    fontWeight:'bold'
  },
  timeCon: {
    flexDirection: 'row-reverse',
    gap: 7,
    paddingTop:20,
  },
  type: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  pickupTime: {
    fontSize: 14,
    color: '#888',
  },
  distanceContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 5,
    gap:2,
    flexWrap:'wrap',
    paddingBottom: 5,
    width: 280,
    paddingHorizontal: 5,
  },
  distance: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 5,
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 5,
  },
});

export default RestaurantCard;
