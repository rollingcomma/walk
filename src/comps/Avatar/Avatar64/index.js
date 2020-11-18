import React from "react";
import { View, StyleSheet} from "react-native";
import BasicAvatar from "../BasicAvatar";

const Avatar64 = ({}) => {
  return (
      <View >
        <BasicAvatar
        image1={require('../dog2.jpg')}
        width={64}
        height={64}
    />
      </View>
  );
};

export default Avatar64;