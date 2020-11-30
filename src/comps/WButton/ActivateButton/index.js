import React from "react";
import { View, Text, StyleSheet, Button, } from "react-native";
import BasicButton from "../BasicButton"

const styles = StyleSheet.create({
  cont: {
    flexDirection: "column",
    marginBottom:10
  },
  
  button: {
    marginBottom:10
  }
});

const ActivateButton = ({onPress, sender}) => {
  return (
      <View style={styles.cont} >
        
        <BasicButton 
        text="Activate Walk"  
        backgroundColor= "#38BC64" 
        height={26}
        width={91}
        size={14}
        index={sender}
        onPress={onPress}
        />
      </View> 
        
      
      
     
    
  );
};

export default ActivateButton;