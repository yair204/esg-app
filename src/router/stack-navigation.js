import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseRole from '../screens/ChooseRoleScreen';
import {SignUpManager} from '../screens/SignupManager';
import {SignUpUser} from '../screens/SignupUser';
import {HomeScreen} from '../screens/HomeScreen';
import MarketPlace from '../screens/MarketPlace';
import {ProfileScreen} from '../screens/ProfileScreen';
import { connect } from 'react-redux';
import { routes } from './routes';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.ChooseRole} component={ChooseRole} />
      <Stack.Screen name={routes.SignUpManager} component={SignUpManager} />
      <Stack.Screen name={routes.SignUpUser} component={SignUpUser} />
      <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={routes.MarketPlace} component={MarketPlace} />
      <Stack.Screen name={routes.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => ({
  isSignUp: state.signUp.isSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: () => dispatch({ type: 'SIGN_UP' }),
  logout: () => dispatch({ type: 'LOGOUT' }),
  removeUser: () => dispatch({ type: 'REMOVE_USER' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyStack);
