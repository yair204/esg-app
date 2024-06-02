import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles } from './../style';

const DatePicker = ({ date, setDate }) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const formatDate = (date) => {
    return date
      ? date.toLocaleDateString(undefined, {
          month: 'numeric',
          year: 'numeric',
        })
      : '';
  };

  return (
    <View style={styles.dateContainer}>
      <Button onPress={showDatePicker} title="בחר חודש" />
      <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      {date && <Text style={styles.dateStyle}>{formatDate(date)}</Text>}
    </View>
  );
};

export default DatePicker;
