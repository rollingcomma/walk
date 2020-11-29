import React from "react";
import { 
  View,
  ActivityIndicator,
  Text, 
  Alert,
  StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})

export default function Loading({isLoading}) {
  return(
    <View style={styles.container} >
      <ActivityIndicator animating={isLoading} size="large" /> 
      <Text>Loading</Text>
    </View>
  )
}