import React from 'react';
import { Button, View, StyleSheet ,Text} from 'react-native';

export const NavigationComponents = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Your screen content goes here */}
      <View style={styles.content}>
        <Button title='Go to Completed' onPress={() => navigation.navigate('CompletedScreen')} />
        <Button title='Task' onPress={() => navigation.navigate('CompletedScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
});
