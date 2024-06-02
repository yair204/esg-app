import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyStack from './src/router/stack-navigation';
import {Provider} from 'react-redux';
import store from './src/providers/store';


const App = () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;