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

const DashBoard = ({navigation, setUser, logout, setIsManager, userInfo,isManager}) => {
  console.log("🚀 ~ DashBoard ~ userInfo:", userInfo)
  
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [reports, setReports] = useState({});
  const [carbonFootprint ,setCarbonFootprint] = useState()
  const company_name = 'dell';
  const [upwardTrend, setUpwardTrend] = useState(true);
  const eleCoeffic = 0.61;
  const waterCoeffic = 10.6;
  const gasCoeffic = 2.3;

  useEffect(() => {
    
    const handleReports = async () => {
      try {
        if (!userInfo || Object.keys(userInfo).length === 0) {
          const userId = await getAsyncStorageDataWithParse('userInfo');
          
          // const user = await api.managers.getManagerById(userId);
          setUser(userId);
        }
        
        if (userInfo && Object.keys(userInfo).length > 0) {
          await uploadData(userInfo.company_name);
        }
      } catch (error) {
        console.error('Error fetching user or reports:', error);
      } 
    };

    handleReports();
  }, [userInfo]);

  useEffect(() => {
   
   
  if (reports && Object.keys(reports).length > 0) {
    const totals = sumUtilities(reports, eleCoeffic, gasCoeffic, waterCoeffic);
    setCarbonFootprint(totals.totalElectricity + totals.totalGas + totals.totalWater);

  }
  },[reports])

  const uploadData = async (company) => {
   
    const response = await api.reports.getReportByCompanyName(
      company_name,
    );
    if(response.data){
    const sortedReports = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestReports = sortedReports.slice(0, 4);
    const groupedData = {};
    latestReports.forEach((report, idx) => {
      const newKey = `month${idx + 1}`;
      groupedData[newKey] = report;
    });

    setReports(groupedData);}

  };

  const sumUtilities = (reports, eleCoeffic, gasCoeffic, waterCoeffic) => {
    let totalElectricity = 0;
    let totalGas = 0;
    let totalWater = 0;
  
    for (let month in reports) {
      totalElectricity += reports[month].electricity;
      totalGas += reports[month].gas;
      totalWater += reports[month].water;
    }
  
    return {
      totalElectricity: Math.floor(totalElectricity * eleCoeffic),
      totalGas: Math.floor(totalGas * gasCoeffic),
      totalWater: Math.floor(totalWater * waterCoeffic)
    };
  };

  const consumptionCalculation = number => {
    return number + '%';
  };

  const handelLogOut = () => {
    setIsManager(false);
    logout();
  };
  return (
    <Main isManager={true} navigation={navigation}>
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
                  {Math.floor(carbonFootprint/8)}
                </Text>
                {/* <Text
                  style={{fontSize: 13, color: '#464646', fontWeight: '600'}}>
                  עצים
                </Text> */}
                <Text
                  style={{fontSize: 13, color: '#464646', fontWeight: '600',textAlign:'center'}}>
                    {upwardTrend ? 'עצים שנצטרך לשתול' : 'עצים שהצלנו'}
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
                  {carbonFootprint}
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
          <View style={{height: '100%', flex: 1}}>
            <ReportCard
              calFunc={consumptionCalculation(23)}
              upwardTrend={upwardTrend}
              text={'ממדי שימוש חוזר'}
              imgSrc={require('../../images/Frame2.png')}
              routes={routes.ComingSoon}
              navigation={navigation}
            />
          </View>
          <View style={{height: '100%', flex: 1}}>
            <ReportCard
              calFunc={consumptionCalculation(32)}
              upwardTrend={upwardTrend}
              imgSrc={require('../../images/Frame3.png')}
              text={'מדדי  מיחזור'}
              navigation={navigation}
              routes={routes.ComingSoon}
              />
          </View>
          <View style={{height: '100%', flex: 1}}>
            <ReportCard
              calFunc={consumptionCalculation(45)}
              upwardTrend={upwardTrend}
              text={'מדדי הפחתה'}
              imgSrc={require('../../images/Frame4.png')}
              navigation={navigation}
              routes={routes.EnergyTab}
            />
          </View>
        </View>

          <View style={styles.cardContainer}>
            <View style={styles.subCardContainer}>
              <CustomCard
                bottomText={'יד 2'}
                navigation={navigation}
                route={routes.ComingSoon}
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
                route={routes.ComingSoon}

              />
              <CustomCard
                bottomText={'נסיעה משותפת'}
                navigation={navigation}
                imageUrl={require('../../images/Carpool.png')}
                bgColor={'#C4E4F7'}
                route={routes.ComingSoon}

              />
            </View>

            <View style={styles.subCardContainer}>
              <CustomCard
                bottomText={'כמה מיחזרת?'}
                navigation={navigation}
                imageUrl={require('../../images/Frame6.png')}
                bgColor={'#F7EDCC'}
                route={routes.ComingSoon}

              />
              <CustomCard
                bottomText={'מה חדש'}
                navigation={navigation}
                bgColor={'#E7D3E2'}
                imageUrl={require('../../images/Exciting.png')}
                route={routes.ComingSoon}

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
    // marginHorizontal: 10,
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
