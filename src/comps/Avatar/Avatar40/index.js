import React from "react";
import { View, StyleSheet} from "react-native";
import BasicAvatar from "../BasicAvatar";

const Avatar40 = ({}) => {
  return (
      <View >
        <BasicAvatar
        image1={require('../dog3.jpg')}
        width={40}
        height={40}
    />
      </View>
  );
};

export default Avatar40;