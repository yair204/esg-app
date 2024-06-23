import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  TouchableWithoutFeedback
} from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-elements';

const OrderSummary = ({route}) => {
  console.log('🚀 ~ OrderSummary ~ params:', route);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const {name, amount, price, oldPrice, description, imageUrl} = route.params;
  const initialRegion = {
    latitude: 32.0853, // Example coordinates for Tel Aviv
    longitude: 34.7818,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const handleItemPress = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={{padding: 15}}>
          <FontAwesome5
            name="angle-right"
            size={22}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <Text style={styles.backButton}> סיכום הזמנה</Text>
        </View>
        <View style={{width: 60}}></View>
      </View>
      <View style={styles.mapContainer}>
        <Image
          style={{width: '100%'}}
          source={require('./../../images/map1.png')}
        />
      </View>

      <View style={styles.deliveryDetails}>
        <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
          <Icon name="location-on" size={17} color="#000" />
          <Text style={styles.addressTitle}>ההזמנה תחכה לך בכתובת</Text>
        </View>
        <Text style={styles.address}>רוטשילד 4, פתח תקווה</Text>

        <TouchableOpacity>
          <View style={styles.timeSlot}>
            <Text style={styles.editTimeSlot}>
              איסוף היום בין השעות 16:00-19:30
            </Text>
            <FontAwesome5 name="chevron-down" size={15} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.soupItem}>
        <Image source={imageUrl} style={styles.soupImage} />
        <View style={styles.soupDetails}>
          <Text style={styles.soupName}>{name}</Text>
          <Text style={styles.soupDescription}>{amount}</Text>
          <Text style={styles.soupDescription}>{description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.oldPrice}>{oldPrice}</Text>
          </View>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>סכום ההזמנה</Text>
        <Text style={styles.totalAmount}>35.00 ₪</Text>
      </View>

      {/* <View style={styles.paymentMethods}>
        <Text style={styles.paymentMethodsTitle}>אמצעי תשלום</Text>
        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.paymentOption}>
            <Image
              style={styles.paymentIcon}
              source={{uri: 'https://example.com/cibus-icon.jpg'}}
            />
            <Text style={styles.paymentText}>Cibus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <Image
              style={styles.paymentIcon}
              source={{uri: 'https://example.com/google-pay-icon.jpg'}}
            />
            <Text style={styles.paymentText}>Google Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <Text style={styles.addPaymentMethod}>+ הוספת כרטיס חדש</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <Text style={[styles.totalLabel, {paddingHorizontal: 10}]}>
        אמצעי תשלום
      </Text>
      <View>
        <Image
          style={{width: 410}}
          source={require('./../../images/payment.png')}
        />
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => handleItemPress()}>
        <Text style={styles.confirmButtonText}>אשר הזמנה</Text>
      </TouchableOpacity>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPressOut={() => {setModalVisible(false)}}
          >
           
              <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>×</Text>
              </Pressable>

              <View>
                <Image source={require('./../../images/order.png')}/>
              </View>
              <View>
              <Image source={require('./../../images/sum.png')}/>
              </View>

            </View>
              </TouchableWithoutFeedback>
          </TouchableOpacity>   
         
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    fontSize: 18,
    color: '#000',
  },
  deliveryDetails: {
    padding: 15,
    marginBottom: 0,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
    padding: 10,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: 'red',
    marginBottom: 20,
  },

  timeSlot: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#98EDB1',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
  },
  timeSlotText: {
    fontSize: 16,
    color: '#000',
  },
  editTimeSlot: {
    fontSize: 16,
    color: '#006400',
  },
  orderItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  paymentMethods: {
    marginBottom: 20,
  },
  paymentMethodsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentOption: {
    alignItems: 'center',
  },
  paymentIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  paymentText: {
    fontSize: 14,
  },
  addPaymentMethod: {
    fontSize: 14,
    color: '#006400',
  },
  confirmButton: {
    backgroundColor: '#006400',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  soupItem: {
    flexDirection: 'row-reverse',
    padding: 14,
    marginVertical: 5,
  },
  soupImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  soupDetails: {
    flex: 1,
    marginHorizontal: 10,
  },

  soupName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  soupDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  oldPrice: {
    fontSize: 14,
    color: '#FC7A57',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingBottom: 60
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default OrderSummary;
