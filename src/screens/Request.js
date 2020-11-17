import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors"

export default Request = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text> Placeholder for Request list </Text>
      <AppButton 
        title="Active Walk"
        containerStyle={styles.ActiveBtnContainerStyle}
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ActiveBtnContainerStyle: {
    width: "30%",
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.primary
  }
})