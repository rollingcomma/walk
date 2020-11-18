import React from "react";
import { View, StyleSheet} from "react-native";
import BasicAvatar from "../BasicAvatar";

const Avatar28 = ({}) => {
  return (
      <View >
        <BasicAvatar
        image1={require('../dog4.jpg')}
        width={28}
        height={28}
    />
      </View>
  );
};

export default Avatar28;