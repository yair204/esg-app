import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Main from '../components/MainWrapper';

const ComingSoonScreen = ({}) => {
  return (
    <Main withFooter={false}>
      <View style={styles.container}>
        <View style={{width:250}}>
          <Text style={{fontSize: 30, fontWeight: 'bold',textAlign:'center',color:'#1B4533'}}>
            גם העולם לא נוצר ביום אחד
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            // paddingTop: 50,
          }}>
          <Image source={require('./../images/work_in_progress-Gif.gif')} />
        </View>
      </View>
    </Main>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop:20,
    backgroundColor:'rgba(255, 255, 255, 1)',
    height:800
  },
});

export default ComingSoonScreen;
