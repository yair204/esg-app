import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './../style';

const ResultRow = ({ sumPrice, sumConsume }) => {
  return (
    <View style={styles.sumContainer}>

      <View>
        <Text style={styles.sumText}>שליש:</Text>
      </View>

      <View style={{ flexDirection: 'row-reverse',gap:9 }}>
        <View style={{ flexDirection: 'row-reverse' }}>
          <Text style={styles.sumText}>עלות:</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.sumValue}>
            {sumPrice}
          </Text>
        </View>
        <View style={{ flexDirection: 'row-reverse'}}>
          <Text style={styles.sumText}>צריכה:</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.sumValue}>
            {sumConsume}
          </Text>
        </View>
      </View>

    </View>
  );
};

export default ResultRow;
