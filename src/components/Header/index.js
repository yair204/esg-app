// import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {strings} from '../../i18n';
import {BurgerMenuIcon} from '../../images/BurgerMenuIcon';
import {NotificationIcon} from '../../images/NotificationIcon';
import { routes } from '../../router/routes';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity >
        <BurgerMenuIcon />
      </TouchableOpacity>
      <Text style={styles.textHeader}>
        {/* {strings('general.dashboard')} */}
        {'Logo'}
      </Text>
      <NotificationIcon />
    </View>
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
    backgroundColor: 'white',
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    position: 'relative',
  },

  textHeader: {
    textAlign: 'center',
    fontSize: 20,
  },
});
