import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Button} from 'react-native';
import Main from '../../components/MainWrapper';
import {Card} from 'react-native-paper'; 
import CustomCard from '../../components/CustomCard';
import {styles} from './style';
import {routes} from '../../router/routes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import { SmallCard } from '../../components/SmallCard';

export const HomeScreen = ({navigation}) => {
  const imageUrl = `https://picsum.photos/700`;

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const savingByKg = number => {
    return number;
  };

  const consumptionCalculation = number => {
    return number + '%';
  };
  console.log(navigation)
  return (
    <Main navigation={navigation} >
      {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
      <View style={styles.container}>
       
        <View style={styles.bigCardContainer}>
          <Card style={styles.bigCard}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',

                height: 250,
              }}>
              <View style={styles.leftPart}>
                <Card.Title
                  title={
                    <TouchableOpacity onPress={() => setOpen(true)}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 5,
                        }}>
                        <FontAwesome5 name="chevron-down" size={15} />

                        <Text style={{fontSize: 17}}>
                          {date.toLocaleDateString(undefined, {
                            month: 'numeric',
                            day: 'numeric',
                          })}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  }
                />
                {/* <Divider /> */}

                <View style={styles.kgContainer}>
                  <Text style={styles.kgText}>{savingByKg(450)}</Text>
                  <Text style={{fontSize: 32}}>{'Kg'}</Text>
                </View>
              </View>
              <View style={styles.verticalDivider} />

              <View style={styles.rightPart}>
                <View style={styles.textCO}>
                  <Card.Title title={'חסכון CO2'} titleStyle={{fontSize: 20}} />
                </View>
              </View>
            </View>
          </Card>
        </View>

        

        <View style={styles.smallCardsContainer}>
          <SmallCard text={'חסכון צריכת מים'} calFunc={consumptionCalculation(10)} upwardTrend={true}/>
          <SmallCard text={'חסכון צריכת חשמל'} calFunc={consumptionCalculation(7)} upwardTrend={false}/>
          <SmallCard text={'התרומה שלך'} calFunc={consumptionCalculation(30)} upwardTrend={true}/>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.subCardContainer}>
            <CustomCard
              bottomText={'Market Place'}
              navigation={navigation}
              route={routes.MarketPlace}
              url={imageUrl}
            />
            <CustomCard
              bottomText={'Food Market'}
              navigation={navigation}
              url={imageUrl}
            />
          </View>

          <View style={styles.subCardContainer}>
            <CustomCard
              bottomText={'volunteering'}
              navigation={navigation}
              url={imageUrl}
            />
            <CustomCard
              bottomText={'text'}
              navigation={navigation}
              url={imageUrl}
            />
          </View>

          <View style={styles.subCardContainer}>
            <CustomCard
              bottomText={'text'}
              navigation={navigation}
              url={imageUrl}
            />
            <CustomCard
              bottomText={'text'}
              navigation={navigation}
              url={imageUrl}
            />
          </View>
        </View>
      </View>
      <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

      {/* </ScrollView> */}
    </Main>
  );
};

export default HomeScreen;
