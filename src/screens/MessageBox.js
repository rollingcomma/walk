import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import colors from "../styles/colors"

export default MessageBox = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text> Placeholder for MessageBox </Text>
      <AppButton 
        title="to Chat room"
        containerStyle={styles.chatRoomBtnContainerStyle}
        onPress={() => navigation.navigate("ChatChannel")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  chatRoomBtnContainerStyle: {
    width: "30%",
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.primary
  }
})