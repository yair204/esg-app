import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
// import { styles } from './styles';

export const MediumCard = ({date,cost,amount,costInNumber,amountInNumber ,imgUrl ,withDate=true}) => {
    const [open, setOpen] = useState(false);
    const dateObj = new Date(date);


  return (
    <View style={styles.container}>
      <View style={styles.bigCard}>
       {withDate && <View style={{flexDirection: 'row', paddingHorizontal: 25}}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}>
              <FontAwesome5 name="chevron-down" size={15} />

              <Text style={{fontSize: 17, fontWeight: 600}}>
                {dateObj?.toLocaleDateString(undefined, {
                  month: 'numeric',
                  year: '2-digit',
                })}
              </Text>
            </View>
          </TouchableOpacity>
        </View>}
        <View style={{flexDirection: 'row',paddingHorizontal:15,paddingVertical:10}}>
          <View style={{height:60,width:70}}>
            <Image resizeMode='contain' style={{height:50,width:50}} source={imgUrl} />
          </View>

          <View style={{flexDirection:'column',flex:1,gap:10}} >
            <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
              <Text style={styles.textStyle}>{'₪'}{costInNumber} </Text>
              <Text style={styles.textStyle}>{cost}</Text>
            </View>
            <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
              <Text style={styles.textStyle}>{amountInNumber}</Text>
              <Text style={styles.textStyle}>{amount}</Text>
            </View>
          </View>
        </View>
      </View>
     {withDate && <DatePicker
        modal
        open={open}
        date={dateObj}
        onConfirm={dateObj => {
          setOpen(false);
          setDate(dateObj);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />}
    </View>
    
  );
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bigCard: {
        backgroundColor: '#F9F8F8',
        borderRadius: 16,
        // padding: 10,
        paddingVertical: 15,
        // margin: 10,
        elevation: 2,
        width: '100%',
        // height: 125,
    },
    textStyle: {
        color: '#464646',
        fontSize: 17
    }
});