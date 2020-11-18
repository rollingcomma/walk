import React from "react";
import { View, StyleSheet} 
from "react-native";
import BasicButton from "../BasicButton"

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignContent:"center",
    justifyContent:"center",
  },
  contButton: {
    marginRight:20
  },
});

const ReviewButton = () => {
  return (
      <View style={styles.cont}>
        <View style={styles.contButton}>
        <BasicButton
        text="Write a Review"  
        backgroundColor= "#565555" 
        height={45}
        width={137}
        />
        </View>
      </View>
  );
};

export default ReviewButton;