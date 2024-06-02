import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Button} from 'react-native';
import Main from '../../components/MainWrapper';
import {Card} from 'react-native-paper';
import CustomCard from '../../components/CustomCard';
import {styles} from './style';
import {routes} from '../../router/routes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import {SmallCard} from '../../components/SmallCard';
import images from '../../theme/images';

export const HomeScreen = ({navigation ,route}) => {
  const imageUrl = `https://s3-alpha-sig.figma.com/img/a6f5/8119/4e936871c35a944cf7a892c7022dc833?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkH8dcNO5DAM~vUPgBO~ppByAGWdpTEKi60hGgOsFHQg6a0j8WPI2j1dMsqm85sTc30Kja0AzVuUYckBXzkupF8sXETCxa5xCiue9pZ6jfwT~4IqQovENaR3qnk80uJWEbPTWqe9XvUBHYbLTs2ZsEhI9ZYGTHvHpF1BcTOEqyzkRWxLW8e6JIkvmeZsD2nauIhSjqowaEpnRQEn0~hLHhuNv7RmRkl7bdOs0NcUcEWXg8AOsxESOG9yZCNZuYtzVZD4VJIEQz1XP2bbfsQ3HK4yHMOC0zQ8L4h~xEByFIN~zSw~GQRIcMN682Rg9uiWB5~-QuMNl5KpcSnRBYhrPg__`;
  const { formData } = route.params;
  console.log("🚀 ~ HomeScreen ~ route:", route)
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [upwardTrend, setUpwardTrend] = useState(true);
  const backgroundColor = upwardTrend ? '#98EDB1' : '#FDE5F3';
  const arrowDirection = upwardTrend ? 'arrow-up' : 'arrow-down';

  const savingByKg = number => {
    return number;
  };

  const consumptionCalculation = number => {
    return number + '%';
  };
  console.log(navigation);
  return (
    <Main navigation={navigation}>
      {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
      <View style={styles.container}>

        <View style={{
          flex:1,
          width:'100%',
          textAlign:'right',
          flexDirection:'row-reverse',
          paddingHorizontal:23,
          paddingVertical:10
        }}>
          <Text style={{fontSize:20,color:'#464646'}}>{formData?.first_name}{' '}{'הי'}</Text>
        </View>
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
                <View>
                  <View style={styles.kgContainer}>
                    <Text style={styles.kgText}>{savingByKg(450)}</Text>
                    <Text style={{fontSize: 32}}>{'Kg'}</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 5,
                      backgroundColor: backgroundColor,
                      width: 70,
                      borderRadius: 10,
                      
                    }}>
                    <Text>{consumptionCalculation(30)}</Text>
                    <FontAwesome5 name={arrowDirection} size={15} />
                  </View>
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

        <View style={styles.cardContainer}>
          <View style={styles.subCardContainer}>
            <CustomCard
              bottomText={'חסכון בצריכת מים'}
              navigation={navigation}
              route={routes.MarketPlace}
              url={images.markePlace}
              bgColor={'#FFFFFF'}
            />
            <CustomCard
              bottomText={'חסכון בצריכת חשמל'}
              navigation={navigation}
              url={images.foodMarket}
              bgColor={'#FFFFFF'}
            />
          </View>
          {/* <SmallCard text={'חסכון צריכת מים'} calFunc={consumptionCalculation(10)} upwardTrend={true}/>
          <SmallCard text={'חסכון צריכת חשמל'} calFunc={consumptionCalculation(7)} upwardTrend={false}/> */}
          <View style={{marginTop: 20}}>
            <SmallCard
              text={'התרומה שלך'}
              calFunc={consumptionCalculation(30)}
              upwardTrend={true}
            />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.subCardContainer}>
            <CustomCard
              bottomText={'Market Place'}
              navigation={navigation}
              route={routes.MarketPlace}
              url={images.markePlace}
              bgColor={'#FFCD29'}
            />
            <CustomCard
              bottomText={'Food Market'}
              navigation={navigation}
              url={images.foodMarket}
              bgColor={'#2ECBD2'}
            />
          </View>

          <View style={styles.subCardContainer}>
            <CustomCard
              bottomText={'volunteering'}
              navigation={navigation}
              url={images.volunteering}
              bgColor={'#EE92C2'}
            />
            <CustomCard
              bottomText={'text'}
              navigation={navigation}
              url={images.shareRides}
              bgColor={'#F7EDCC'}
            />
          </View>

          <View style={styles.subCardContainer}>
            <CustomCard
              bottomText={'text'}
              navigation={navigation}
              url={images.Recycling}
              bgColor={'#CDEDEE'}
            />
            <CustomCard
              bottomText={'text'}
              navigation={navigation}
              bgColor={'#AF4D98'}
              url={images.news}
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
