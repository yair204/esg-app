import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {api} from './../api';

export const TaskScreen = () => {
  const [value, onChangeText] = useState('');

  // useEffect(() => {
  //   getCompletedTasks();
  // }, []);

  // const getCompletedTasks = async () => {
  //   return await api.tasks.getCompletedTasks();
  // };

  // const UncompletedTasks = getCompletedTasks();
  // console.log("🚀 ~ TaskScreen ~ UncompletedTasks:", UncompletedTasks)
  return (
    <View style={{flex: 1}}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter New Task"
          editable
          multiline
          numberOfLines={4}
          maxLength={80}
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Icon name="add" size={30} />
      </View>

      <View style={styles.inputWrapperTask}>
        <Text>Tasks:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingRight: 10,
    borderWidth: 1,
    width: '60%',
    borderRadius: 5,
    height: 40,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 5,
  },
  inputWrapperTask: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
