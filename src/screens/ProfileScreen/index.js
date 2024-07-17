import React, {useRef, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Main from '../../components/MainWrapper';
import {styles} from './style';
import {ImageCarouselPicker} from '../../components/ImageSelector';
import CustomCard from '../../components/CustomCard';
import {routes} from '../../router/routes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import { connect } from 'react-redux';

const ProfileScreen = ({navigation,userInfo,isManager,logout ,setIsManager}) => {
  const [bdVisible, setBDVisible] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const cardCoverHigh = 150;

  const scrollRef1 = useRef();
  const scrollToEnd1 = () => scrollRef1.current.scrollToEnd({animated: false});
  const scrollRef2 = useRef();
  const scrollToEnd2 = () => scrollRef2.current.scrollToEnd({animated: false});

  const setItems = image => {
    setPhoto(image);
    setBDVisible(false);
  };
  const handleLogout = () => {
    logout();
    setIsManager(false);
  }

  return (
    <Main isManager={isManager} navigation={navigation}>
      <View style={styles.container}>
        <TouchableOpacity style={{flexDirection:'row-reverse',width:'100%',paddingHorizontal:10}}
        onPress={()=> handleLogout()}>
        <FontAwesome5 name="sign-out-alt" size={19} />

        </TouchableOpacity>
        <View style={styles.photoPreview}>
          <TouchableOpacity style={styles.selectImageWrapper}>
            {photo?.length !== 0 && (
              <Image
                source={{
                  uri: photo?.uri,
                }}
                style={styles.image}
              />
            )}
            {photo?.length === 0 && (
              <ImageCarouselPicker onSelect={setItems} visible={bdVisible} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.userName}>
          <Text style={styles.userNameText}>{'היי'} {userInfo?.first_name}</Text>
        </View>

        <View style={styles.bigCardContainer}>
          <TouchableOpacity style={styles.bigCard}>
            <View style={styles.leftPart}>

              <TouchableOpacity onPress={() => setOpen(true)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    marginTop:10,
                    marginLeft:10,
                    backgroundColor:'#EEEBE4',
                    paddingHorizontal:5
                  }}>
                  <FontAwesome5 name="chevron-down" size={15} />

                  <Text style={{fontSize: 17,color: '#464646'}}>
                    {date.toLocaleDateString(undefined, {
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.profitText}>
                <Text style={{fontSize: 20, color: '#464646'}}>
                  {'הרווחת החודש'}
                </Text>
              </View>
            </View>

            <View style={styles.rightPart}>
              <View style={{ }}>

              <Image style={{width:270,height:170}} source={require('./../../images/Frame5402.png')}/>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.smallCardsContainer}>
          <View style={styles.textCon}>
            <Text style={{color: '#464646', fontSize: 20}}>
              {'הפינוקים שלי'}
            </Text>
          </View>

          <View style={styles.subCardContainer}>
            <ScrollView
              ref={scrollRef1}
              onContentSizeChange={scrollToEnd1}
              contentContainerStyle={{
                flexDirection: 'row-reverse',
                flexGrow: 1,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View
                style={{flex: 1, flexDirection: 'row', marginHorizontal: 10}}>
                <View style={styles.card}>
                  <CustomCard
                    bottomText={'כרטיס לסרט חינם'}
                    navigation={navigation}
                    imageUrl={require('./../../images/pop.png')}
                    bgColor={'#FFFFFF'}
                    route={routes.ComingSoon}
                    height={170}
                    padding={0}
                  />
                </View>
                <View style={styles.card}>
                  <CustomCard
                    bottomText={'שובר מתנה ב 40 שח'}
                    navigation={navigation}
                    route={routes.ComingSoon}
                    imageUrl={require('./../../images/gift.png')}
                    bgColor={'#FFFFFF'}
                    height={170}
                    padding={0}
                  />
                </View>
                <View style={styles.card}>
                  <CustomCard
                    bottomText={'גלידה מתנה'}
                    navigation={navigation}
                    route={routes.ComingSoon}
                    imageUrl={require('./../../images/ice.png')}
                    bgColor={'#FFFFFF'}
                    height={170}
                    padding={0}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.smallCardsContainer}>
          <View style={styles.textCon}>
            <Text style={{color: '#464646', fontSize: 20}}>
              {'הסטוריית הזמנות'}
            </Text>
          </View>

          <View style={[styles.subCardContainer, {paddingBottom: 40}]}>
            <ScrollView
              ref={scrollRef2}
              onContentSizeChange={scrollToEnd2}
              contentContainerStyle={{
                flexDirection: 'row-reverse',
                flexGrow: 1,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  marginHorizontal: 10,
                }}>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'אוכל'}
                    navigation={navigation}
                    route={routes.FoodMarket}
                    imageUrl={require('./../../images/food.png')}
                    bgColor={'#F6E1ED'}
                    height={150}
                    imgHeight={50}
                    width={60}
                    textSize={11}
                  />
                </View>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'יד 2'}
                    navigation={navigation}
                    route={routes.ComingSoon}
                    imageUrl={require('./../../images/secondHand.png')}
                    bgColor={'#D1E5D7'}
                    height={150}
                    imgHeight={50}
                    width={60}
                    textSize={11}
                  />
                </View>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'טרמפים'}
                    navigation={navigation}
                    route={routes.ComingSoon}
                    imageUrl={require('./../../images/car.png')}
                    bgColor={'#C4E4F7'}
                    height={150}
                    imgHeight={50}
                    width={60}
                    textSize={11}
                  />
                </View>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'התנדבות'}
                    navigation={navigation}
                    route={routes.ComingSoon}
                    imageUrl={require('./../../images/FrameTree.png')}
                    bgColor={'#F6DCD5'}
                    height={150}
                    imgHeight={50}
                    width={60}
                    textSize={11}
                  />
                </View>
              </View>
            </ScrollView>
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
    </Main>
  );
};


const mapStateToProps = state => ({
  userInfo: state.authUserData,
  language: state.language,
  isManager: state?.userRole?.isManager,

});

const mapDispatchToProps = dispatch => ({
  setUser: userData => dispatch({type: 'SET_USER_DATA', payload: userData}),
  logout: () => dispatch({type: 'LOGOUT'}),
  setIsManager: isManager =>
    dispatch({type: 'SET_IS_MANAGER', payload: isManager}),
});

export const Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);