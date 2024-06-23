import React, {useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';
import Main from '../../components/MainWrapper';
import {Card} from 'react-native-paper';
import CustomCard from '../../components/CustomCard';
import {styles} from './style';
import {routes} from '../../router/routes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import {SmallCard} from '../../components/SmallCard';
import images from '../../theme/images';
import { connect } from 'react-redux';
import { getAsyncStorageDataWithParse } from '../../storage/async-storage';
import { api } from '../../api';


export const Home = ({navigation ,userInfo,setUser,logout}) => {
  const imageUrl = `https://s3-alpha-sig.figma.com/img/a6f5/8119/4e936871c35a944cf7a892c7022dc833?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkH8dcNO5DAM~vUPgBO~ppByAGWdpTEKi60hGgOsFHQg6a0j8WPI2j1dMsqm85sTc30Kja0AzVuUYckBXzkupF8sXETCxa5xCiue9pZ6jfwT~4IqQovENaR3qnk80uJWEbPTWqe9XvUBHYbLTs2ZsEhI9ZYGTHvHpF1BcTOEqyzkRWxLW8e6JIkvmeZsD2nauIhSjqowaEpnRQEn0~hLHhuNv7RmRkl7bdOs0NcUcEWXg8AOsxESOG9yZCNZuYtzVZD4VJIEQz1XP2bbfsQ3HK4yHMOC0zQ8L4h~xEByFIN~zSw~GQRIcMN682Rg9uiWB5~-QuMNl5KpcSnRBYhrPg__`;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [upwardTrend, setUpwardTrend] = useState(true);
  const backgroundColor = upwardTrend ? '#98EDB1' : '#FDE5F3';
  const arrowDirection = upwardTrend ? 'arrow-up' : 'arrow-down';
  

  useEffect(() => {
    console.log('homeScreen');
    
    const setUserInfo = async () => {
      const userId = await getAsyncStorageDataWithParse("userInfo");
      const user = await api.users.getUserById(userId); 
      // console.log("🚀 ~ setUserInfo ~ user homescreen:", user)
      await setUser(user);
    }
    if(userInfo){
      setUserInfo();}
  },[])


  const savingByKg = number => {
    return number;
  };

  const consumptionCalculation = number => {
    return number + '%';
  };
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
          <Text style={{fontSize:20,color:'#464646'}}>{userInfo?.first_name}{' '}{'הי'}</Text>
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
                <View >
                  <Image style={{width:120,height:110}} source={require('./../../images/trees_gif.gif')}/>
                </View>
                <View style={{marginTop:10,width:150}}>
                  <Text numberOfLines={2} style={{fontSize:17,fontWeight:'600',textAlign:'center'}}>{` ביחד הצלנו ${20} עצים`} </Text>
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
              imageUrl={require('../../images/Water.png')} 
              bgColor={'#FFFFFF'}
              calFunc={consumptionCalculation(30)}
              upwardTrend={upwardTrend}
            />
             <CustomCard
              bottomText={'חסכון בצריכת חשמל'}
              navigation={navigation}
              route={routes.MarketPlace}
              imageUrl={require('../../images/lamp.png')} 
              bgColor={'#FFFFFF'}
              calFunc={consumptionCalculation(30)} 
              upwardTrend={upwardTrend}
            />
          </View>

          <View style={{marginTop: 20,height:80}}>
            <SmallCard
              text={'התרומה שלך'}
              calFunc={consumptionCalculation(30)}
              upwardTrend={true}
              imgUrl={require('./../../images/Hi.gif')}
            />
          </View>
        </View>

          <View style={styles.cardContainer}>
            <View style={styles.subCardContainer}>
              <CustomCard
                bottomText={'יד 2'}
                navigation={navigation}
                routes={routes.ComingSoon}
                imageUrl={require('../../images/Furniture.png')}
                bgColor={'#D1E5D7'}
              />
              <CustomCard
                bottomText={'מה אוכלים'}
                navigation={navigation}
                imageUrl={require('../../images/Frame5.png')}
                route={routes.FoodMarket}
                bgColor={'#F6E1ED'}
              />
            </View>

            <View style={styles.subCardContainer}>
              <CustomCard
                bottomText={'למי לעזור'}
                navigation={navigation}
                imageUrl={require('../../images/Frame9.png')}
                bgColor={'#F6DCD5'}
                routes={routes.ComingSoon}

              />
              <CustomCard
                bottomText={'נסיעה משותפת'}
                navigation={navigation}
                imageUrl={require('../../images/Carpool.png')}
                bgColor={'#C4E4F7'}
                routes={routes.ComingSoon}

              />
            </View>

            <View style={styles.subCardContainer}>
              <CustomCard
                bottomText={'כמה מיחזרת?'}
                navigation={navigation}
                imageUrl={require('../../images/Frame6.png')}
                bgColor={'#F7EDCC'}
                routes={routes.ComingSoon}

              />
              <CustomCard
                bottomText={'מה חדש'}
                navigation={navigation}
                bgColor={'#E7D3E2'}
                imageUrl={require('../../images/Exciting.png')}
                routes={routes.ComingSoon}

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
const mapStateToProps = (state) => ({
  userInfo: state.authUserData,
});

const mapDispatchToProps = dispatch => ({
  signUp: () => dispatch({ type: "SIGN_UP" }),
  setUser: (userData) => dispatch({ type: 'SET_USER_DATA', payload: userData }),
  logout: () => dispatch({type: 'LOGOUT'}),

})

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
