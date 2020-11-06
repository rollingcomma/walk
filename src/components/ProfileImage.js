import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default ProfileImage = ({ profileImageUrl, width, height }) => {
  return(
    <View>
      <Image 
        style={{width: width ||50, height:height || 50, borderRadius: 50}} 
        source={{uri:profileImageUrl}} />
    </View>
  )
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50
  }
})