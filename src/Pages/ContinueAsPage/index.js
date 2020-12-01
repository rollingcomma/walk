import React from "react";
import { View, Text, StyleSheet, 
  // TouchableOpacity 
} from "react-native";
import Title from "../../comps/Title";
import ContinueAs from "../../comps/ContinueAs";
import BasicButton from "../../comps/WButton/BasicButton";

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



const ContinueAsPage = ({navigation}) => {

  const handleDogOwnerClick = () => {
    navigation.navigate("NewOwner");
  }

  const handleWalkerClick = () => {
    navigation.navigate("NewWalker");
  }

  return (
    <View style={styles.app}>
      <View style={styles.text}>
      <Title />
      <ContinueAs text={" Continue as a"}/>
      </View>
      <View style={styles.button}>
      <BasicButton 
        text="Dog Owner"  
        backgroundColor= "#53B7BE" 
        width={242}
        height={55}
        size={18}
        onPress={handleDogOwnerClick}
        />
      <BasicButton 
        text="Dog Walker"  
        backgroundColor= "#53B7BE" 
        width={242}
        height={55}
        size={18}
        onPress={handleWalkerClick}
        />
        </View>
    </View>
  );
};

export default ContinueAsPage; 