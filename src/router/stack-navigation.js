import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CompletedScreen } from '../screens/CompletedScreen';
import { TaskScreen } from '../screens/TaskScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationComponents } from '../components/NavigationComponent';
import { HomeScreen } from '../screens/HomeScreen';
import MarketPlace from '../screens/MarketPlace';
import { routes } from './routes';
import { ProfileScreen } from '../screens/ProfileScreen';
import Main from '../components/MainWrapper';

const Stack = createStackNavigator();

const MyStack = () =>  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name={routes.MarketPlace} component={MarketPlace} />
      <Stack.Screen name={routes.Profile} component={ProfileScreen} />
     
    </Stack.Navigator>
  );
}

export default MyStack;