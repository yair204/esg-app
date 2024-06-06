import React from 'react';
import { View ,Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const IndexUpDown = ({calFunc ,upwardTrend}) => {
    const backgroundColor  =  upwardTrend? '#98EDB1':'#FDE5F3';
    const arrowDirection =  upwardTrend? "arrow-up" :"arrow-down";
    return (
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              backgroundColor:backgroundColor,
              borderRadius:10,
              paddingHorizontal:10,
              // width:'20%'
            }}>
            <Text>{calFunc}</Text>
            <FontAwesome5 name={arrowDirection} size={15} />
          </View>
    )
};

export default IndexUpDown;