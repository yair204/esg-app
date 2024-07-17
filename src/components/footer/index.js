import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { routes } from "../../router/routes";

export const Footer = ({ navigation ,isManager}) => {
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
        {/* <FontAwesome5
          name="user"
          size={24}
          color={selectedButton === 'profile' ? '#98EDB1' :'#FFFFFF' } 
        /> */}
        <Image style={styles.image} source={require('./../../images/profile.png')}/> 
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={() => handlePress(isManager? routes.DashBoardManager :routes.HomeScreen, 'home')}
      >
        {/* <FontAwesome5
          name="home"
          size={24}
          color={selectedButton === 'home' ? '#98EDB1' :'#FFFFFF'} 
        /> */}
          <Image style={styles.image} source={require('./../../images/Vector.png')}/> 

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
  image:{
    width:25,
    height:25,
  }
});
