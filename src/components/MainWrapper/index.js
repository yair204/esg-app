import * as React from 'react';
import {View,SafeAreaView, ScrollView} from 'react-native';
import Header from '../Header';
import { Footer } from '../footer';



const Main = ({children,navigation,isManager ,withFooter=true}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation}/>
      <ScrollView style={{flex: 1}}>
      <View >
      </View>
      <View style={{flex: 1}}>
        {children}
      </View>
      </ScrollView>
       {withFooter && <Footer navigation={navigation} isManager={isManager} />}
    </SafeAreaView>
  );
};

export default Main;

