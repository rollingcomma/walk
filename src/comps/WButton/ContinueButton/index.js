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
      marginBottom: 45,
    },
  });

const ContinueButton = () => {
  return (
    <View style={styles.cont}>
        <View style={styles.contButton1}>
        <BasicButton 
        text="Continue"  
        backgroundColor= "#53B7BE" 
        width={175}
        height={45}
        size={18}
        />
        </View>
      </View>
  );
};

export default ContinueButton;