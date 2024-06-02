import React, { useState } from 'react';
import { useWindowDimensions, View, Text } from 'react-native';

import EnergyTab from './energy';
import WaterTab from './water';
import GasTab from './gas';
import { styles } from './style';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Calculations = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'energy', title: 'Energy' },
    { key: 'gas', title: 'Gas' },
    { key: 'water', title: 'Water' },
  ]);

  const renderScene = SceneMap({
    energy: EnergyTab,
    gas: GasTab,
    water: WaterTab,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={styles.tabBar}
      labelStyle={styles.labelStyle}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>מד הפחתה (Reduce)</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    </View>
  );
};

export default Calculations;
