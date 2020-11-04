import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

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
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
    paddingVertical: 10,
    borderRadius: 5
    
  },
  textStyle: {
    textAlign: "center",
    color: "lightblue",
    fontSize: 16,
    fontWeight: "bold"
  }
});