import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {routes} from '../../router/routes';
import {api} from '../../api';
import {getAsyncStorageDataWithParse} from '../../storage/async-storage';
import Main from '../../components/MainWrapper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import {StyleSheet} from 'react-native';
import CustomCard from '../../components/CustomCard';
import IndexUpDown from '../../components/IndexUpDown';
import {ReportCard} from './ReportsCards';

const DashBoard = ({navigation, setUser, logout, setIsManager, userInfo}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [upwardTrend, setUpwardTrend] = useState(true);
  const backgroundColor = upwardTrend ? '#98EDB1' : '#FDE5F3';
  const arrowDirection = upwardTrend ? 'arrow-up' : 'arrow-down';

  useEffect(() => {
    const handelReports = async () => {
      if (!userInfo) {
        const userId = await getAsyncStorageDataWithParse('userInfo');
        console.log('🚀 ~ uploadUser ~ userId:', userId);
        const user = await api.managers.getManagerById(userId);
        console.log('🚀 ~ uploadUser ~ user:', user.data);
        setUser(user.data);
      }

      console.log('🚀 ~ DashBoard ~ userInfo:', userInfo.company_name);
      const reports = await api.reports.getReportByCompanyName(
        userInfo.company_name,
      );
      // console.log('🚀 ~ handelReports ~ reports:', reports.data);
    };

    handelReports();
  }, [userInfo]);

  const consumptionCalculation = number => {
    return number + '%';
  };

  const handelLogOut = () => {
    setIsManager(false);
    logout();
  };
  return (
    <Main navigation={navigation}>
      {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            width: '100%',
            textAlign: 'right',
            flexDirection: 'row-reverse',
            paddingHorizontal: 23,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 20, color: '#464646'}}>
            {userInfo?.first_name} {'הי'}
          </Text>
          {/* <Button title='logout' onClick={() => logout}/> */}
        </View>

        <View style={styles.bigCardContainer}>
          <TouchableOpacity style={styles.bigCard}>
            <View style={styles.upperHalf}>
              <View style={styles.imgContainer}>
                <Image
                  style={{flex: 1, width: 70, height: 100}}
                  resizeMode="contain"
                  source={require('../../images/Trees.png')}
                />
              </View>

              <View style={styles.upperHalfText}>
                <Text
                  style={{fontSize: 32, color: '#464646', fontWeight: '600'}}>
                  {20}
                </Text>
                <Text
                  style={{fontSize: 16, color: '#464646', fontWeight: '600'}}>
                  עצים
                </Text>
                <Text
                  style={{fontSize: 16, color: '#464646', fontWeight: '600'}}>
                  שהצלנו
                </Text>
              </View>
            </View>
            <View style={{width: '45%'}}>
              <IndexUpDown
                calFunc={consumptionCalculation(34)}
                upwardTrend={upwardTrend}
              />
            </View>
            <View style={styles.downHalf}>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text
                  style={{fontSize: 32, color: '#464646', fontWeight: '600'}}>
                  {100}
                </Text>
                <Text
                  style={{fontSize: 16, color: '#464646', fontWeight: '600'}}>
                  kg
                </Text>
              </View>
              <Text style={{fontSize: 16, color: '#464646', fontWeight: '600'}}>
                טביעת רגל פחמנית
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigCard}>
            <View style={[styles.upperHalf, {justifyContent: 'center'}]}>
              <View style={styles.imgContainer1}>
                <Image
                  style={{flex: 1, width: 100, height: 100}}
                  resizeMode="contain"
                  source={require('../../images/Frame1.png')}
                />
              </View>
            </View>
            <View style={{width: '45%'}}>
              <IndexUpDown
                calFunc={consumptionCalculation(34)}
                upwardTrend={upwardTrend}
              />
            </View>
            <View style={styles.downHalf}>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text
                  style={{fontSize: 32, color: '#464646', fontWeight: '600'}}>
                  {50}
                </Text>
              </View>
              <Text style={{fontSize: 16, color: '#464646', fontWeight: '600'}}>
                מוניטין ירוק ברשת
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bigCardContainer}>
          <View style={{height: 190, flex: 1}}>
            <ReportCard
              calFunc={consumptionCalculation(23)}
              upwardTrend={upwardTrend}
              text={'ממדי שימוש חוזר'}
              imgSrc={require('../../images/Frame2.png')}
            />
          </View>
          <View style={{height: 190, flex: 1}}>
            <ReportCard
              calFunc={consumptionCalculation(32)}
              upwardTrend={upwardTrend}
              text={'מדדי  מיחזור'}
              imgSrc={require('../../images/Frame3.png')}
            />
          </View>
          <View style={{height: 190, flex: 1}}>
            <ReportCard
              calFunc={consumptionCalculation(45)}
              upwardTrend={upwardTrend}
              text={'מדדי הפחתה'}
              imgSrc={require('../../images/Frame4.png')}
              navigation={navigation}
            />
          </View>
        </View>

          <View style={styles.cardContainer}>
            <View style={styles.subCardContainer}>
              <CustomCard
                bottomText={'יד 2'}
                navigation={navigation}
                route={routes.MarketPlace}
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
              />
              <CustomCard
                bottomText={'נסיעה משותפת'}
                navigation={navigation}
                imageUrl={require('../../images/Carpool.png')}
                bgColor={'#C4E4F7'}
              />
            </View>

            <View style={styles.subCardContainer}>
              <CustomCard
                bottomText={'כמה מיחזרת?'}
                navigation={navigation}
                imageUrl={require('../../images/Frame6.png')}
                bgColor={'#F7EDCC'}
              />
              <CustomCard
                bottomText={'מה חדש'}
                navigation={navigation}
                bgColor={'#E7D3E2'}
                imageUrl={require('../../images/Exciting.png')}
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

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#EEEBE4'
  },

  cardContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  subCardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
    width: '90%',
    justifyContent: 'space-around',
    height: 175
  },
  imgContainer: {
    height: 100,
    width: 70,
  },
  imgContainer1: {
    height: 100,
    width: 100,
  },
  downHalf: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    flex: 1,
  },
  upperHalf: {
    flexDirection: 'row',
    gap: 15,
  },
  upperHalfText: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  smallCardsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    // backgroundColor:'red',
  },

  bigCardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  bigCard: {
    backgroundColor: '#F9F8F8',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    elevation: 2,
    width: 180,
    height: 220,
  },
  ReportCard: {
    height: 100,
    width: 100,
  },
  leftPart: {
    flex: 1,
    gap: 30,
    alignItems: 'flex-start',
    // paddingBottom: 40,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10,
  },
  rightPart: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  kgText: {
    fontSize: 64,
    // fontWeight:'bold',
    color: '#464646',
  },
  textCO: {
    width: '80%',
    marginLeft: 45,
    marginTop: 4,
  },
  kgContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  verticalDivider: {
    width: 1,
    backgroundColor: '#464646',
    height: '60%',
    marginTop: 80,
  },

  smallCardText: {
    fontSize: 16,
  },
});

const mapStateToProps = state => ({
  userInfo: state.authUserData,
  language: state.language,
});

const mapDispatchToProps = dispatch => ({
  setUser: userData => dispatch({type: 'SET_USER_DATA', payload: userData}),
  logout: () => dispatch({type: 'LOGOUT'}),
  setIsManager: isManager =>
    dispatch({type: 'SET_IS_MANAGER', payload: isManager}),
});

export const DashBoardManager = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
