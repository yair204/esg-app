// screens/ChooseRoleScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { routes } from '../../router/routes';

const ChooseRole = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Button
        title="Sign Up as Manager"
        onPress={() => navigation.navigate(routes.SignUpManager)}
      />
      <Button
        title="Sign Up as User"
        onPress={() => navigation.navigate(routes.SignUpUser)}
      />
       {/* <Button
        title="Log In"
        onPress={() => navigation.navigate(routes.Login)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:'row',
    
  },
});

export default ChooseRole;
