import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './../style';
import DatePicker from '../components/DatePicker'; 
import InputRow from '../components/InputRow';
import ResultRow from '../components/ResultRow';

const GasTab = () => {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [date3, setDate3] = useState(new Date());
  const [date4, setDate4] = useState(new Date());

  const [number1a, setNumber1a] = useState('');
  const [number1b, setNumber1b] = useState('');
  const [number2a, setNumber2a] = useState('');
  const [number2b, setNumber2b] = useState('');
  const [number3a, setNumber3a] = useState('');
  const [number3b, setNumber3b] = useState('');
  const [number4a, setNumber4a] = useState('');
  const [number4b, setNumber4b] = useState('');

  const [number5, setNumber5] = useState('');
  const [number6, setNumber6] = useState('');

  const [sumPrice, setSumPrice] = useState();
  const [sumConsume, setSumConsume] = useState();
  const [percentageDifference5, setPercentageDifference5] = useState();
  const [percentageDifference6, setPercentageDifference6] = useState();

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

  return (
    <View style={styles.container}>
     
        <View style={styles.ReduceContainer}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 60, flex: 2 }}>
              <Text style={styles.text}>צריכה</Text>
              <Text style={styles.text}>עלות</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
              <Text style={styles.text}>חודש</Text>
            </View>
          </View>
       
       <View style={{flexDirection:'column'}}>

        <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
          <DatePicker date={date1} setDate={setDate1} />
          <InputRow numberA={number1a} setNumberA={setNumber1a} numberB={number1b} setNumberB={setNumber1b} />
        </View>

        <View style={{flexDirection:'row-reverse',justifyContent:'space-between',paddingVertical:3}}>
          <DatePicker date={date2} setDate={setDate2} />
          <InputRow numberA={number2a} setNumberA={setNumber2a} numberB={number2b} setNumberB={setNumber2b} />
        </View>

        <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
          <DatePicker date={date3} setDate={setDate3} />
          <InputRow numberA={number3a} setNumberA={setNumber3a} numberB={number3b} setNumberB={setNumber3b} />
        </View>


        <View style={{flexDirection:'row-reverse',justifyContent:'space-between'}}>
          <DatePicker date={date4} setDate={setDate4} />
          <InputRow numberA={number4a} setNumberA={setNumber4a} numberB={number4b} setNumberB={setNumber4b} />
        </View>

        </View>
       </View>

        <ResultRow sumPrice={sumPrice} sumConsume={sumConsume} />

        <View style={styles.dateContainer}>
          <View>
            <Text style={styles.sumText1}>יעד שליש:</Text>
          </View>
          <View style={styles.inputAndTitle}>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumber5} value={number5} />
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumber6} value={number6} />
          </View>
        </View>

        <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around' }}>
          <Button onPress={finalCalculate} title="חשב" />
          <Text style={styles.resultText}>% {percentageDifference6}</Text>
          <Text style={styles.resultText}>% {percentageDifference5}</Text>
        </View>
    </View>
  );
};

export default GasTab;
