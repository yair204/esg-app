import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import PMUBackdrop from '../PMUBackdrop';

export const BackdropWrapper = ({
  visible,
  handleClose,
  children,
  style,
  afterClose,
}) => {
  let [wasVisible, setWasVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setWasVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      setWasVisible(true);
    }
  }, [visible]);

  return (
    <PMUBackdrop
      visible={visible}
      handleClose={handleClose}
      closeOnBackButton={true}
      afterClose={() => {
        afterClose && afterClose();
      }}
      swipeConfig={{velocityThreshold: 0.3, directionalOffsetThreshold: 80}}
      animationConfig={{speed: 14, bounciness: 4}}
      containerStyle={[styles.bdContainer, style]}>
      {children}
    </PMUBackdrop>
  );
};

const styles = StyleSheet.create({
  bdContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
});
