import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChooseRole from '../screens/ChooseRoleScreen';
import {SignUpManager} from '../screens/SignupManager';
import {SignUpUser} from '../screens/SignupUser';
import {HomeScreen} from '../screens/HomeScreen';
import {FoodMarket} from '../screens/FoodMarket';
import {Profile} from '../screens/ProfileScreen';
import {connect} from 'react-redux';
import {routes} from './routes';
import Calculations from '../screens/CalculationsScreen';
import {
  getAsyncStorageData,
  logCurrentStorage,
  getAsyncStorageDataWithParse,
} from '../storage/async-storage';
import {DashBoardManager} from '../screens/DashboardManager';
import CompanyCardForm from '../screens/CompanyForm';
import keys from '../storage/storage-keys';
import {Login} from '../screens/LoginScreen';
import {Energy} from '../screens/CalculationsScreen/energy';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import RestaurantMenu from '../screens/RestaurantMenuScreen';
import OrderSummary from '../screens/OrderScreen';

const Stack = createStackNavigator();

const MyStack = ({isSignUp, isManager, signUp, logout, setIsManager}) => {
  console.log('isManager', isManager, 'isSignUp', isSignUp);
 
  useEffect(() => {
    console.log('start1');
    isSigned();
  }, []);
  
  useEffect(()=>{
    console.log('star2');
    isManagerAccount();

  },[])

  const isSigned = async () => {
    const flag = await getAsyncStorageData(keys.isSignUped);
    if (flag == 'true') {
      signUp();
    } else logout();
  };

  const isManagerAccount = async () => {
    const isManagerFlag = await getAsyncStorageDataWithParse(keys?.isManager);
    
    if (isManagerFlag === true) {
      console.log('🚀 ~ isManagerAccount ~ isKidFlag:', isManagerFlag);
      setIsManager(isManagerFlag);
    }
  };

  logCurrentStorage();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isSignUp ? (
        <>
          <Stack.Screen name={routes.ChooseRole} component={ChooseRole} />
          <Stack.Screen name={routes.SignUpManager} component={SignUpManager} />
          <Stack.Screen name={routes.SignUpUser} component={SignUpUser} />
          <Stack.Screen name={routes.Login} component={Login}/>
        </>
      ) : isManager ? (
        <>
          <Stack.Screen name={routes.DashBoardManager} component={DashBoardManager}/>
          <Stack.Screen name={routes.CalculationsScreen} component={Calculations}/>
          <Stack.Screen name={routes.CompanyForm} component={CompanyCardForm} />
          <Stack.Screen name={routes.EnergyTab} component={Energy}/>
          <Stack.Screen name={routes.FoodMarket} component={FoodMarket} />
          <Stack.Screen name={routes.Profile} component={Profile} />
          <Stack.Screen name={routes.ComingSoon} component={ComingSoonScreen}/>
          <Stack.Screen name={routes.RestaurantMenu} component={RestaurantMenu} />
          <Stack.Screen name={routes.OrderSummary} component={OrderSummary}/>
        </>
      ) : (
        <>
          <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={routes.FoodMarket} component={FoodMarket} />
          <Stack.Screen name={routes.Profile} component={Profile} />
          <Stack.Screen name={routes.ComingSoon} component={ComingSoonScreen}/>
          <Stack.Screen name={routes.RestaurantMenu} component={RestaurantMenu} />
          <Stack.Screen name={routes.OrderSummary} component={OrderSummary}/>
        </>
      )}
    </Stack.Navigator>
  );
  
};

const mapStateToProps = state => ({
  isSignUp: state.signUp.isSignUp,
  isManager: state?.userRole?.isManager,
});

const mapDispatchToProps = dispatch => ({
  signUp: () => dispatch({type: 'SIGN_UP'}),
  logout: () => dispatch({type: 'LOGOUT'}),
  removeUser: () => dispatch({type: 'REMOVE_USER'}),
  setIsManager: isManager =>
    dispatch({type: 'SET_IS_MANAGER', payload: isManager}),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyStack);
