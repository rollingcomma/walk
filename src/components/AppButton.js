import React from 'react';
// import colors from '../styles/colors';
import { 
  TouchableOpacity, 
  ActivityIndicator } from 'react-native';
import {AppText} from './index1';

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
