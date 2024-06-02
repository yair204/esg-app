import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const HalfEllipseProgressBar = ({ progress, width = 200, height = 100 }) => {
  const maxProgress = 100;
  const adjustedProgress = Math.min(Math.max(progress, 0), maxProgress);
  const sweepAngle = (adjustedProgress / maxProgress) * 180;

  const radiusX = width / 2;
  const radiusY = height / 2;
  const centerX = width / 2;
  const centerY = height;

  const endX = centerX + radiusX * Math.cos((sweepAngle - 90) * (Math.PI / 180));
  const endY = centerY + radiusY * Math.sin((sweepAngle - 90) * (Math.PI / 180));

  const largeArcFlag = sweepAngle > 180 ? 1 : 0;

  const pathData = `
    M ${centerX - radiusX}, ${centerY}
    A ${radiusX},${radiusY} 0 ${largeArcFlag} 1 ${endX},${endY}
    L ${centerX}, ${centerY}
    Z
  `;

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor="skyblue" />
            <Stop offset="100%" stopColor="blue" />
          </LinearGradient>
        </Defs>
        <Path
          d={pathData}
          fill="url(#grad)"
          stroke="black"
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HalfEllipseProgressBar;
