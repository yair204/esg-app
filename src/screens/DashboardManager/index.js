import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {routes} from '../../router/routes';

const DashBoard = ({navigation, setUser, logout, setIsManager}) => {
  const handelLogOut = () => {
    setIsManager(false);
    logout();
  };
  return (
    <View>
      <Button
        title="דוחות"
        onPress={() => navigation.navigate(routes.CalculationsScreen)}
      />

      <Button
        title="עדכן פרטי חברה"
        onPress={() => navigation.navigate(routes.CompanyForm)}
      />
      <Button title="LogOut" onPress={handelLogOut} />
    </View>
  );
};

const mapStateToProps = state => ({
  userInfo: state.authUserData,
  language: state.language,
});

const mapDispatchToProps = dispatch => ({
  setUser: userData => dispatch({type: 'SET_USER_DATA', payload: userData}),
  logout: () => dispatch({type: 'LOGOUT'}),
  setIsManager: isManager =>
    dispatch({type: 'SET_IS_MANAGER', payload: isManager}),
});

export const DashBoardManager = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
