import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";
import BasicButton from "../BasicButton"

const styles = StyleSheet.create({
    
    contButton1: {
      marginBottom: 45,
    },
  });

const DogOwnerButton = () => {
  return (
   
        <View style={styles.contButton1}>
        <BasicButton 
        text="Dog Owner"  
        backgroundColor= "#53B7BE" 
        width={242}
        height={55}
        size={18}
        />
        </View>
     
  );
};

export default DogOwnerButton;