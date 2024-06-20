import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getCurrentLocation} from './../../utils/GetLocation';
import {
  getAsyncStorageDataWithParse,
  storeAsyncStorageObject,
} from '../../storage/async-storage';
import LocationPermissionModal from '../../components/LocationPermissionModal';
import {api} from '../../api';
import {connect} from 'react-redux';
import {calculateDistance} from '../../utils/calculateDistance';
import {Icon} from 'react-native-elements';
import RestaurantCard from './RestaurantsCard';
import SearchBar from '../../components/SearchBar';
import LinearGradient from 'react-native-linear-gradient';
import Main from '../../components/MainWrapper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ActivityIndicator } from 'react-native';

const FoodMarketScreen = ({userInfo, setUser, navigation}) => {
  // console.log('🚀 ~ FoodMarketScreen ~ userInfo:', userInfo);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [permissionChecked, setPermissionChecked] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [showLocation, setShowLocation] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const types = [...new Set(restaurants.map(restaurant => restaurant.type))];
    const uniqueTypeObjects = types.map((type, index) => ({
      id: index.toString(),
      type,
    }));
    setUniqueTypes(uniqueTypeObjects);
  }, [restaurants]);

  useEffect(() => {
    const checkLocationPermission = async () => {
      try {
        const hasPermission = await getAsyncStorageDataWithParse(
          'locationPermission',
        );
        if (hasPermission === 'true') {
          const loc = await getCurrentLocation();
          setLocation(loc);
        } else {
          setModalVisible(true);
        }
        setPermissionChecked(true);
      } catch (err) {
        setError(err.message);
      }
    };

    checkLocationPermission();
  }, []);

  useEffect(() => {
    fetchRestaurants();
    setUserInfo();
    handleLocation();
  }, []);

  const setUserInfo = async () => {
    const userId = await getAsyncStorageDataWithParse('userInfo');
    const currentUserInfo = await api.users.getUserById(userId);
    setUser(currentUserInfo.data);
  };

  const fetchRestaurants = async () => {
    try {
      const response = await api.foodMarket.getAllRestaurants();
      const restaurantsWithPoints = response.data.map(restaurant => {
        const coordinates = restaurant.coordinates
          .match(/\(([^)]+)\)/)[1]
          .split(' ');
        const latitude = parseFloat(coordinates[1]);
        const longitude = parseFloat(coordinates[0]);
        return {
          ...restaurant,
          latitude,
          longitude,
        };
      });
      setRestaurants(restaurantsWithPoints);
      setLoading(false);
    } catch (err) {
      setError(err.message);
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

  const handleSearch = event => {
    console.log('Searching for:', event.nativeEvent.text);
  };

  const handleFilter = () => {
    console.log('Filter options clicked');
  };
  const filteredRestaurants = selectedType
  ? restaurants.filter(item => item.type === selectedType)
  : restaurants;

  const renderRestaurantCard = ({item}) => (
    <TouchableOpacity
      style={[
        styles.typeContainer,
        item.type === selectedType && styles.selectedTypeContainer,
      ]}
      onPress={() => setSelectedType(item.type)}>
      <Text
        style={[
          styles.typeText,
          item.type === selectedType && styles.selectedTypeText,
        ]}>
        {item.type}
      </Text>
    </TouchableOpacity>
  );
  return (
    <Main navigation={navigation}>
      <View style={styles.container}>
        <LocationPermissionModal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
          onAllow={handleLocation}
          onDeny={() => setModalVisible(false)}
          name={userInfo?.first_name}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.cardContainer}>
            <LinearGradient
              colors={['#F6E1ED', '#FFFFFF']}
              style={styles.linearGradient}>
              <View style={styles.linearContainer}>
                <View style={styles.textContainer}>
                  <Text style={[styles.text,{fontSize:30}]}>מה מזמינים היום?</Text>
                </View>

                <TouchableOpacity  onPress={()=>{setShowLocation(!showLocation)}} style={styles.locationContainer}>
                  <Icon name="location-on" size={20} color="#000" />
                  <Text style={styles.textLoc}>המיקום שלך</Text>
                  <FontAwesome5 name="chevron-down" size={19} />
                </TouchableOpacity>
               <View style={styles.location}>
               {showLocation && <Text style={[{fontSize:16}]}>{location?.countryName} {location?.streetNumber} {location?.street}</Text>}
                </View>
                <View style={styles.searchContainer}>
                  <SearchBar
                    placeholder="חפש מסעדה, סופרמרקט, מוצר"
                    onSearch={handleSearch}
                    onFilter={handleFilter}
                  />
                </View>
               
              </View>
            <View style={{paddingHorizontal:5,marginBottom:10}}>
              <FlatList
                data={uniqueTypes}
                renderItem={renderRestaurantCard}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollToEnd={true}
                inverted={true}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>הממולצים שלנו</Text>
            </View>

            <View>
              <FlatList
                data={filteredRestaurants}
                renderItem={({item}) => (
                  <RestaurantCard
                    restaurant={item}
                    imgUrl={require('./../../images/Mask_group.png')}
                    location={location}
                    navigation={navigation}
                  />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollToEnd={true}
                inverted={true}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>רגע לפני שיעלם</Text>
            </View>
            <View>
              <FlatList
                data={restaurants}
                renderItem={({item}) => (
                  <RestaurantCard
                    restaurant={item}
                    imgUrl={require('./../../images/b.png')}
                    navigation={navigation}
                    location={location}
                  />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollToEnd={true}
                inverted={true}
              />
            </View>
            </LinearGradient>

          </View>
        )}
      </View>
      
    </Main>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  searchContainer: {
    paddingHorizontal: 12,
  },
  cardContainer: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#464646',
  },
  textContainer: {
    padding: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  locationContainer:{
    paddingHorizontal: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',

  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
  },
  typeText: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 10,
  },
  selectedTypeContainer: {
    color: 'white',
    backgroundColor: '#F991CC',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },

  selectedTypeText: {
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    // height: 250,
  },

  linearContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height:200,
    marginVertical:40,
  },
  linearText: {
    color: '#ffffff',
    fontSize: 24,
  },
  textLoc: {
    fontSize: 18,
    marginHorizontal: 5,
    fontWeight: '600',
    color: '#464646'
  },
  location:{
    flexDirection: 'row-reverse',
    paddingHorizontal:15 
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
