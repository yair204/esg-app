import React from 'react-native';
import { Button,View ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const CompletedScreen = (navigation) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>completed</Text>
      <Button title='Task' onPress={() => navigation.navigate('Task')} />

    </View>
  );
  
}
