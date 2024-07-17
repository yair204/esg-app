import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tooltip from 'rn-tooltip';

// Function to normalize the height value to fit the bar height
const normalizeHeight = (value) => {
  // Define the specific height mappings
  const heightMappings = [
    { value: 1000, height: 205 },
    { value: 500, height: 135 },
    { value: 100, height: 69 },
    { value: 0, height: 0 },
  ];

  // Sort mappings by value for correct interpolation
  heightMappings.sort((a, b) => a.value - b.value);

  // Interpolate height based on the value
  for (let i = 0; i < heightMappings.length - 1; i++) {
    const { value: v1, height: h1 } = heightMappings[i];
    const { value: v2, height: h2 } = heightMappings[i + 1];
    
    if (value >= v1 && value <= v2) {
      const ratio = (value - v1) / (v2 - v1);
      return h1 + ratio * (h2 - h1);
    }
  }

  // If value exceeds the defined range, return the maximum height
  return heightMappings[heightMappings.length - 1].height;
};


export const Bar = ({ height, date }) => {
  // Convert the date string to a Date object
  const dateObj = new Date(date);

  const normalizedHeight = normalizeHeight(height); 

  return (
    <View>
      <Tooltip backgroundColor='#F6E1ED' withOverlay={false} popover={<Text>{height}</Text>}>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: normalizedHeight }]} />
          <View style={{ flexDirection: 'row', width: 50 }}>
            <Text style={{ fontWeight: '600', color: '#464646' }}>
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



