import React from "react"
import { StyleSheet,View,TouchableOpacity } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { routes } from "../../router/routes"; 


export const Footer = ({navigation}) =>{

    return(
        <View style={styles.fixedBottomButtons}>
        <TouchableOpacity style={styles.fixedButton} onPress={() => navigation.navigate(routes.Profile)}>
          <FontAwesome5 name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fixedButton} onPress={() => navigation.navigate(routes.HomeScreen)}>
          <FontAwesome5 name="home" size={24} color="black" />
        </TouchableOpacity>
    </View>
    )
};



export const styles = StyleSheet.create({
   
    fixedBottomButtons: {
      position: 'absolute', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      flexDirection: 'row', 
      justifyContent: 'center', 
     
      padding: 10, 
      gap: 40,
      // opacity: 1, 
    },
    fixedButton: {
      // opacity: 1, 
      backgroundColor: '#fff', 
      borderRadius: 50, 
      padding: 20, 
    },
  });