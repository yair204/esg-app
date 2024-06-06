import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import mapImg from './../../images/map.png';

const LocationPermissionModal = ({ visible, onRequestClose, onAllow, onDeny ,name}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 25, textAlign: 'center', color: '#464646' }}>הי {name}</Text>
          <Text style={{ fontSize: 20, textAlign: 'center', color: '#464646' }}>
            כדי שנוכל למצוא עבורך מקומות הכי שווים אנו צריכים לאתר את המיקום שלך
          </Text>
          <Text style={{ fontSize: 15, textAlign: 'center', color: '#464646' }}>
            אל דאגה המידע אישי ולא נשתף אותו
          </Text>
          <View style={styles.mapContainer}>
            <Image source={mapImg} style={styles.mapImage} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={onAllow}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: '#464646' }}>בטח</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={onDeny}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: '#464646' }}>פעם אחרת</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  mapContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  buttonStyle: {
    borderRadius: 25,
    backgroundColor: 'gray',
    padding: 10,
    marginVertical: 10,
  },
});

export default LocationPermissionModal;

