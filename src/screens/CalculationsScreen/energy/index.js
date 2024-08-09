import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
// import { styles } from './../style';

import {MediumCard} from '../../../components/MediumCard';
import {DataCard} from '../../../components/DataCard';
import {Controller} from './Controller';
import {api} from '../../../api';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const EnergyTab = ({navigation, userInfo}) => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [value5, setValue5] = useState();
  const [value6, setValue6] = useState();
  const [value7, setValue7] = useState();
  const [value8, setValue8] = useState();
  const [value9, setValue9] = useState();
  const [value10, setValue10] = useState();
  const [value11, setValue11] = useState();
  const [value12, setValue12] = useState();

  const [sumPrice, setSumPrice] = useState();
  const [sumConsume, setSumConsume] = useState();
  const [percentageDifference5, setPercentageDifference5] = useState();
  const [percentageDifference6, setPercentageDifference6] = useState();
  const [height, setHeight] = useState(0);

  const [pressedButtonElc, setPressedButtonElc] = useState('cost');
  const [pressedButtonWater, setPressedButtonWater] = useState('cost');
  const [pressedButtonGas, setPressedButtonGas] = useState('cost');

  const [reports, setReports] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const company_name = 'dell';
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (reports && Object.keys(reports).length > 0) {
      if (pressedButtonElc === 'cost') {
        setValue1(barHeight(reports?.month1.electricity_cost));
        setValue2(barHeight(reports?.month2.electricity_cost));
        setValue3(barHeight(reports?.month3.electricity_cost));
        setValue4(barHeight(reports?.month4.electricity_cost));
      } else {
        setValue1(barHeight(reports?.month1.electricity));
        setValue2(barHeight(reports?.month2.electricity));
        setValue3(barHeight(reports?.month3.electricity));
        setValue4(barHeight(reports?.month4.electricity));
      }
      setLoading(false);
    }
  }, [reports, pressedButtonElc]);

  useEffect(() => {
    if (reports && Object.keys(reports).length > 0) {
      if (pressedButtonWater === 'cost') {
        setValue5(barHeight(reports?.month1.water_cost));
        setValue6(barHeight(reports?.month2.water_cost));
        setValue7(barHeight(reports?.month3.water_cost));
        setValue8(barHeight(reports?.month4.water_cost));
      } else {
        setValue5(barHeight(reports?.month1.water));
        setValue6(barHeight(reports?.month2.water));
        setValue7(barHeight(reports?.month3.water));
        setValue8(barHeight(reports?.month4.water));
      }
      setLoading(false);
    }
  }, [reports, pressedButtonWater]);

  useEffect(() => {
    if (reports && Object.keys(reports).length > 0) {
      if (pressedButtonGas === 'cost') {
        setValue9(barHeight(reports?.month1.gas_cost));
        setValue10(barHeight(reports?.month2.gas_cost));
        setValue11(barHeight(reports?.month3.gas_cost));
        setValue12(barHeight(reports?.month4.gas_cost));
      } else {
        setValue9(barHeight(reports?.month1.gas));
        setValue10(barHeight(reports?.month2.gas));
        setValue11(barHeight(reports?.month3.gas));
        setValue12(barHeight(reports?.month4.gas));
      }
      setLoading(false);
    }
  }, [reports, pressedButtonGas]);

  const loadData = async () => {
    try {
      const response = await api.reports.getReportByCompanyName(
        company_name,
      );
      const sortedReports = response.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
      const latestReports = sortedReports.slice(0, 4);
      const groupedData = {};
      latestReports.forEach((report, idx) => {
        const newKey = `month${idx + 1}`;
        groupedData[newKey] = report;
      });

      setReports(groupedData);
      console.log(reports?.month1?.electricity_cost);
    } catch (err) {
      setError(err.message || 'Failed to load data');
      Alert.alert('Error', error);
    }
  };

  const handlePressElc = button => {
    setPressedButtonElc(button);
  };
  const handlePressWater = button => {
    setPressedButtonWater(button);
  };
  const handlePressGas = button => {
    setPressedButtonGas(button);
  };

  const calculateSumConsume = () => {
    const num1a = parseFloat(number1a) || 0;
    const num2a = parseFloat(number2a) || 0;
    const num3a = parseFloat(number3a) || 0;
    const num4a = parseFloat(number4a) || 0;
    let sum = num1a + num2a + num3a + num4a;
    setSumConsume(sum);
    return sum;
  };

  const calculateSumPrice = () => {
    const num1b = parseFloat(number1b) || 0;
    const num2b = parseFloat(number2b) || 0;
    const num3b = parseFloat(number3b) || 0;
    const num4b = parseFloat(number4b) || 0;
    let sum = num1b + num2b + num3b + num4b;
    setSumPrice(sum);
    return sum;
  };

  const finalCalculate = () => {
    const sc = calculateSumConsume();
    const sp = calculateSumPrice();

    const num5 = parseFloat(number5) || 0;
    if (num5 !== 0) {
      const percentage = ((sc - num5) / num5) * 100;
      setPercentageDifference5(percentage.toFixed(2));
    } else {
      setPercentageDifference5('N/A');
    }

    const num6 = parseFloat(number6) || 0;
    if (num6 !== 0) {
      const percentage = ((sp - num6) / num6) * 100;
      setPercentageDifference6(percentage.toFixed(2));
    } else {
      setPercentageDifference6('N/A');
    }
  };

  const barHeight = value => {
    return (value);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <View style={{flexDirection: 'row-reverse', padding: 15}}>
            <FontAwesome5
              name="angle-right"
              size={22}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{flexDirection: 'row-reverse', paddingTop: 15}}>
            <View style={{height: 50, width: 50}}>
              <Image
                resizeMode="contain"
                style={{height: 35, width: 35}}
                source={require('./../../../images/X.png')}
              />
            </View>
            <Text style={{fontSize: 20}}>מדדי הפחתה</Text>
          </View>

          <View>
            <Controller
              pressedButton={pressedButtonElc}
              handlePress={handlePressElc}
              bgColor1={'#FFCD29'}
              bgColor2={'#F7EDCC'}
              title={'מדדי צריכת חשמל'}
            />
          </View>

          <View style={styles.bigCardContainer}>
            <DataCard
              date1={reports.month1.date}
              date2={reports.month2.date}
              date3={reports.month3.date}
              date4={reports.month4.date}
              val1={value1}
              val2={value2}
              val3={value3}
              val4={value4}
              isCost={pressedButtonElc === 'cost'}
              measure={'electric'}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              date={reports.month1.date}
              imgUrl={require('./../../../images/lamp.png')}
              cost={'צריכת חשמל'}
              amount={'צריכת חשמל'}
              costInNumber={reports?.month1?.electricity_cost}
              amountInNumber={`${reports?.month1?.electricity}${' '}Kwh`}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              date={reports.month1.date}
              imgUrl={require('./../../../images/goals.png')}
              cost={'יעד חודשי'}
              amount={'יעד חודשי'}
              costInNumber={200}
              amountInNumber={`${330}${' '}Kwh`}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              imgUrl={require('./../../../images/goals1.png')}
              cost={'יעד שליש'}
              amount={'יעד שליש'}
              costInNumber={800}
              amountInNumber={`${1320} ${''}Kwh`}
              withDate={false}
            />
          </View>

          <View>
            <Controller
              pressedButton={pressedButtonWater}
              handlePress={handlePressWater}
              bgColor1={'#009FFD'}
              bgColor2={'#C4E4F7'}
              title={'מדדי צריכת מים'}
            />
          </View>

          <View style={styles.bigCardContainer}>
            <DataCard
              date1={reports.month1.date}
              date2={reports.month2.date}
              date3={reports.month3.date}
              date4={reports.month4.date}
              val1={value5}
              val2={value6}
              val3={value7}
              val4={value8}
              isCost={pressedButtonWater === 'cost'}
              measure={'water'}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              date={reports.month1.date}
              imgUrl={require('./../../../images/goalWater.png')}
              cost={'צריכת מים'}
              amount={'צריכת מים'}
              costInNumber={reports?.month1?.water}
              amountInNumber={`${reports?.month1?.water_cost}${' '}M3`}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              date={reports.month1.date}
              imgUrl={require('./../../../images/goalsWater.png')}
              cost={'יעד חודשי '}
              amount={'יעד חודשי'}
              costInNumber={40}
              amountInNumber={`${30}${' '}M3`}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              imgUrl={require('./../../../images/goalsWater1.png')}
              cost={'יעד שליש '}
              amount={'יעד שליש'}
                costInNumber={160}
                amountInNumber={`${120}${' '}M3`}
                withDate={false}
              />
          </View>

          <View>
            <Controller
              pressedButton={pressedButtonGas}
              handlePress={handlePressGas}
              bgColor1={'#FC7A57'}
              bgColor2={'#F6DCD5'}
              title={'מדדי צריכת דלק'}
            />
          </View>

          <View style={styles.bigCardContainer}>
            <DataCard
              date1={reports.month1.date}
              date2={reports.month2.date}
              date3={reports.month3.date}
              date4={reports.month4.date}
              val1={value9}
              val2={value10}
              val3={value11}
              val4={value12}
              isCost={pressedButtonGas === 'cost'}
              measure={'gas'}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              date={reports.month1.date}
              imgUrl={require('./../../../images/FuelDrop.png')}
              cost={'צריכת דלק'}
              amount={'צריכת דלק'}
              costInNumber={reports?.month1?.gas}
              amountInNumber={`${reports?.month1?.gas_cost}${' '}L`}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              date={reports.month1.date}
              imgUrl={require('./../../../images/goalsGas.png')}
              cost={'יעד חודשי'}
              amount={'יעד חודשי'}
              costInNumber={250}
              amountInNumber={`${100}${' '}L`}
            />
          </View>
          <View style={styles.bigCardContainer}>
            <MediumCard
              imgUrl={require('./../../../images/goalsGas1.png')}
              cost={'יעד שליש'}
              amount={'יעד שליש'}
              costInNumber={1000}
              amountInNumber={`${450}${' '}L`}
              withDate={false}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

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

export const Energy = connect(mapStateToProps, mapDispatchToProps)(EnergyTab);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigCardContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  wrapperCustom: {
    width: '15%',
    borderRadius: 8,
    padding: 6,
  },
  text: {
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
  },
});

// {
//   /* <View style={styles.ReduceContainer}>
//           <View style={{ flexDirection: 'row' }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 60, flex: 2 }}>
//               <Text style={styles.text}>צריכה</Text>
//               <Text style={styles.text}>עלות</Text>
//             </View>
//             <View style={{ flex: 1, justifyContent: 'flex-start' }}>
//               <Text style={styles.text}>חודש</Text>
//             </View>
//           </View>

//        <View style={{flexDirection:'column'}}>

//         <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
//           <DatePicker date={date1} setDate={setDate1} />
//           <InputRow numberA={number1a} setNumberA={setNumber1a} numberB={number1b} setNumberB={setNumber1b} />
//         </View>

//         <View style={{flexDirection:'row-reverse',justifyContent:'space-between',paddingVertical:3}}>
//           <DatePicker date={date2} setDate={setDate2} />
//           <InputRow numberA={number2a} setNumberA={setNumber2a} numberB={number2b} setNumberB={setNumber2b} />
//         </View>

//         <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
//           <DatePicker date={date3} setDate={setDate3} />
//           <InputRow numberA={number3a} setNumberA={setNumber3a} numberB={number3b} setNumberB={setNumber3b} />
//         </View>

//         <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
//           <DatePicker date={date4} setDate={setDate4} />
//           <InputRow numberA={number4a} setNumberA={setNumber4a} numberB={number4b} setNumberB={setNumber4b} />
//         </View>

//         </View>
//        </View>

//         <ResultRow sumPrice={sumPrice} sumConsume={sumConsume} />

//         <View style={styles.dateContainer}>
//           <View>
//             <Text style={styles.sumText1}>יעד שליש:</Text>
//           </View>
//           <View style={styles.inputAndTitle}>
//             <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumber5} value={number5} />
//             <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumber6} value={number6} />
//           </View>
//         </View>

//         <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around' }}>
//           <Button onPress={finalCalculate} title="חשב" />
//           <Text style={styles.resultText}>% {percentageDifference6}</Text>
//           <Text style={styles.resultText}>% {percentageDifference5}</Text>
//         </View> */
// }
