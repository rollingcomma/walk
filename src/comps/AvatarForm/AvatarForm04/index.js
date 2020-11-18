import React from "react";
import { View, Text, StyleSheet} from "react-native";
import AvatarViewProfile from "../AvatarViewProfile";
import ActivateButton from "../../WButton/ActivateButton";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"center",
  },
});

const AvatarForm04 = ({}) => {
  
  return (
      <View style={styles.container}>
        <AvatarViewProfile/>
        <ActivateButton style={styles.button01}/>
      </View>
  );
};

AvatarForm04.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarForm04;