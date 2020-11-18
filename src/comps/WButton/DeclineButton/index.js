import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";
import BasicButton from "../BasicButton"

const styles = StyleSheet.create({
  cont: {
    flexDirection: "column",
  },
  contButton1: {
    marginBottom:15
  }
});

const DeclineButton = () => {
  return (
      <View style={styles.cont} >
        <BasicButton 
        text="Decline"  
        backgroundColor= "#C74C33" 
        height={26}
        width={91}
        size={14}
        />
      </View>
    
  );
};

export default DeclineButton;