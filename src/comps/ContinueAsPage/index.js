import React from "react";
import { View, Text, StyleSheet, 
  // TouchableOpacity 
} from "react-native";
import Title from "../Title";
import ContinueAs from "../ContinueAs";
import BasicButton from "../WButton/BasicButton";

const styles = StyleSheet.create({ 
  app: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F5FEFE",
    height:"100%",
    
  },
  text: {
    height:120,

    justifyContent:"space-between",
    alignItems:"center",
    
  },
  button: {
    marginTop:70,
    height:150,
    // backgroundColor:"red",
    justifyContent:"space-between"
  },
});

const ContinuePage = () => {
  return (
    <View style={styles.app}>
      <View style={styles.text}>
      <Title />
      <ContinueAs  />
      </View>
      <View style={styles.button}>
      <BasicButton 
        text="Dog Owner"  
        backgroundColor= "#53B7BE" 
        width={242}
        height={55}
        size={18}
        />
      <BasicButton 
        text="Dog Walker"  
        backgroundColor= "#53B7BE" 
        width={242}
        height={55}
        size={18}
        />
        </View>
    </View>
  );
};

export default ContinuePage; 
