import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tooltip from 'rn-tooltip';

export const Bar = ({ height, date }) => {
  // Convert the date string to a Date object
  const dateObj = new Date(date);

  return (
    <View>
      <Tooltip backgroundColor='#F6E1ED' withOverlay={false} popover={<Text>{height}</Text>}>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: height  }]} />
          <View style={{ flexDirection: 'row', width: 40 }}>
            <Text style={{ fontWeight: 600, color: '#464646' }}>
              {dateObj.toLocaleDateString(undefined, {
                month: '2-digit',
                year: '2-digit',
              })}
            </Text>
          </View>
        </View>
      </Tooltip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    padding: 16,
  },
  barContainer: {
    width: 13,
    height: 190,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  bar: {
    width: '100%',
    backgroundColor: '#ADA7A7',
  },
});
