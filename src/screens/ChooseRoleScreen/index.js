// screens/ChooseRoleScreen.js
import React from 'react';
import {View, Button, StyleSheet, Pressable, Text} from 'react-native';
import {routes} from '../../router/routes';
import {Image} from 'react-native';

const ChooseRole = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('./../../images/signup.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.Button}
          onPress={() => navigation.navigate(routes.SignUpUser)}>
          <Text style={styles.text}>להתחבר כעובד</Text>
        </Pressable>
        <Pressable
          style={styles.Button}
          onPress={() => navigation.navigate(routes.SignUpManager)}>
          <Text style={styles.text}>להתחבר כמנהל</Text>
        </Pressable>
      </View>
      {/* <Button
        title="Sign Up as Manager"
      />
      <Button
        title="Sign Up as User"
      /> */}
      {/* <Button
        title="Log In"
        onPress={() => navigation.navigate(routes.Login)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  Button: {
    backgroundColor: '#1B4533',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 25,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '90%',
    gap: 10,
  },
  text: {
    color: '#98EDB1',
    fontSize: 16,
    fontWeight: '600',
  },
  imgContainer: {
    // width:200,
    // height:200,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default ChooseRole;
