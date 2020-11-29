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

const DeclineButton = ({isDeclined, onPress, index}) => {
  return (
      <View style={styles.cont} >
        <BasicButton 
        text={isDeclined? "Decline":"Declined"}  
        backgroundColor= {isDeclined? "#959494":"#C74C33" } 
        height={26}
        width={91}
        size={14}
        index={index}
        onPress={isDeclined?null:onPress}
        />
      </View>
    
  );
};

export default DeclineButton;