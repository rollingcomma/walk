import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";
import BasicButton from "../BasicButton"

const GoingButton = () => {
  return (
   
        <View>
        <BasicButton 
        text="Going"  
        backgroundColor= "#53B7BE"  
        height={27} 
        width={107}
        />
        </View>
     
  );
};

export default GoingButton;