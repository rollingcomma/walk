import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import TopBar from '../TopBar';
import DogPhotos from '../DogPhotos';
import FooterBar from '../FooterBar';
import AvatarDogProfile from "../AvatarForm/AvatarDogProfile";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  AvatarDogProfile: {
    marginBottom:0,
    marginTop:20,
  },
  
});

const DogProfilePage = ({}) => {
 
  return (
      <View style={styles.app}>
        <ScrollView>
          <View style={styles.AvatarDogProfile}>
          <AvatarDogProfile />
          </View>
          <DogPhotos/>
        </ScrollView>
        <FooterBar />
      </View>
  );
};

DogProfilePage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default DogProfilePage;