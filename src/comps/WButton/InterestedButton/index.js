import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";
import BasicButton from "../BasicButton"



const InterestedButton = () => {
  return (
   
        <View>
        <BasicButton 
        text="Interested"  
        backgroundColor= "#959494" 
        height={27} 
        width={107}
        />
        </View>
     
  );
};

export default InterestedButton;