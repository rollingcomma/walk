import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import AppText from '../components/AppText';
import colors from './colors';

export default AppButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  isSubmitting,
  disabled,
  indicatorColor,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) onPress();
      }}
      disabled={disabled || isSubmitting}
      style={containerStyle}
    >
      {isSubmitting ? (
        <ActivityIndicator color={indicatorColor} />
      ) : (
        <AppText textStyle={textStyle}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};
