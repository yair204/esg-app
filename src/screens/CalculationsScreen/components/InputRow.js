import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './../style';

const InputRow = ({ numberA, setNumberA, numberB, setNumberB }) => {
  return (
    <View style={styles.inputAndTitle}>
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumberA} value={numberA} />
      <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumberB} value={numberB} />
    </View>
  );
};

export default InputRow;
