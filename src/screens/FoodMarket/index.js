import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {getCurrentLocation} from './../../utils/GetLocation';
import {
  getAsyncStorageDataWithParse,
  storeAsyncStorageObject,
} from '../../storage/async-storage';
import LocationPermissionModal from '../../components/LocationPermissionModal';
import {api} from '../../api';
import {connect} from 'react-redux';
import { calculateDistance } from '../../utils/calculateDistance';

const FoodMarketScreen = ({userInfo, setUser}) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    console.log("foodMarket")
    const checkLocationPermission = async () => {
      try {
        await storeAsyncStorageObject('locationPermission', 'false');

        const hasPermission = await getAsyncStorageDataWithParse(
          'locationPermission',
        );
        console.log("====",hasPermission)
        if (hasPermission === 'true') {
          const loc = await getCurrentLocation();
          setLocation(loc);
          setModalVisible(false);
        } else {
          setModalVisible(true);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    checkLocationPermission();
  }, []);

  useEffect(() => {
    fetchRestaurants();
    setUserInfo();
    // handleLocation();
  }, []);

  const setUserInfo = async () => {
    const userId = await getAsyncStorageDataWithParse('userInfo');
    const currentUserInfo = await api.users.getUserById(userId);
    await setUser(currentUserInfo);
  };

  
  const fetchRestaurants = async () => {
    try {
      const response = await api.foodMarket.getAllRestaurants();
      const restaurantsWithPoints = response.map(restaurant => {
        const coordinates = restaurant.coordinates.match(/\(([^)]+)\)/)[1].split(' ');
        const latitude = parseFloat(coordinates[1]);
        const longitude = parseFloat(coordinates[0]);
        return {
          ...restaurant,
          latitude,
          longitude
        };
      });
      setRestaurants(restaurantsWithPoints);
    } catch (err) {
      setError1(err.message);
    }
  };
  

  const handleLocation = async () => {
    try {
      const loc = await getCurrentLocation();
      console.log("🚀 ~ handleLocation ~ loc:", loc)
      setLocation(loc);
      setModalVisible(false);
      await storeAsyncStorageObject('locationPermission', 'true');
    } catch (err) {
      setError(err.message);
    }
  };


  
  const renderRestaurantCard = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardText}>{item.name}</Text>
      <Text>Type: {item.type}</Text>
      <Text>{calculateDistance(item.latitude,item.longitude,location?.coords.latitude,location?.coords.longitude)}</Text>
      {/* Add more details as needed */}
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <LocationPermissionModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        onAllow={handleLocation}
        onDeny={() => setModalVisible(false)}
        name={userInfo?.first_name}
      />
      {location ? (
        <Text>
          Location: {location.coords.latitude}, {location.coords.longitude}
          {'\n'}
          Country: {location.countryName}
          {'\n'}
          Country Code: {location.countryCode}
        </Text>
      ) : (
        <Text>{error || 'Fetching location...'}</Text>
      )}
      {error1 ? (

        <Text>Error: {error1}</Text>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderRestaurantCard}
          keyExtractor={item => item.id.toString()} // Assuming each restaurant has a unique ID
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // initialScrollIndex={}
          scrollToEnd={true}

        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingVertical: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    elevation: 2,
    width: 200,
    height: 200,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});

const mapStateToProps = state => ({
  userInfo: state.authUserData,
});

const mapDispatchToProps = dispatch => ({
  setUser: userData => dispatch({type: 'SET_USER_DATA', payload: userData}),
});

export const FoodMarket = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodMarketScreen);
