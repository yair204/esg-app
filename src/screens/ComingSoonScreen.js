import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Main from '../components/MainWrapper';

const ComingSoonScreen = ({}) => {
  return (
    <Main withFooter={false}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 150,
          }}>
          <Image source={require('./../images/comingSoon.png')} />
        </View>
      </View>
    </Main>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ComingSoonScreen;
