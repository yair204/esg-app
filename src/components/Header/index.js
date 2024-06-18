// import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {strings} from '../../i18n';
import {BurgerMenuIcon} from '../../images/BurgerMenuIcon';
import {NotificationIcon} from '../../images/NotificationIcon';
import {routes} from '../../router/routes';

const Header = () => {
  return (
    <TouchableOpacity>
      <View style={styles.headerContainer}>
        <BurgerMenuIcon />
        <View style={{width: 70, height: 20}}>
          <Image style={{width:'100%',height:'100%'}} source={require('./../../images/logo1.png')} />
        </View>
        <NotificationIcon />
      </View>
    </TouchableOpacity>
  );
};
export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#EEEBE4',
    position: 'relative',
  },

  textHeader: {
    textAlign: 'center',
    fontSize: 20,
  },
});
