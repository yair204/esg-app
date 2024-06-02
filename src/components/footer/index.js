import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { routes } from "../../router/routes";

export const Footer = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handlePress = (route, button) => {
    setSelectedButton(button);
    navigation.navigate(route);
  };

  return (
    <View style={styles.fixedBottomButtons}>
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={() => handlePress(routes.Profile, 'profile')}
      >
        <FontAwesome5
          name="user"
          size={24}
          color={selectedButton === 'profile' ? '#98EDB1' :'#FFFFFF' } 
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={() => handlePress(routes.HomeScreen, 'home')}
      >
        <FontAwesome5
          name="home"
          size={24}
          color={selectedButton === 'home' ? '#98EDB1' :'#FFFFFF'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedBottomButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    gap: 40,
  },
  fixedButton: {
    backgroundColor: '#1B4533',
    borderRadius: 50,
    padding: 20,
  },
});
