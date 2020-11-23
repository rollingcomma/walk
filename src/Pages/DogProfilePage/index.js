import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import DogPhotos from '../../comps/DogPhotos';
// import FooterBar from '../../comps/FooterBar';
import AvatarDogProfile from "../../comps/AvatarForm/AvatarDogProfile";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  AvatarDogProfile: {
    marginBottom:0,
    marginTop:50,
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
        {/* <FooterBar /> */}
      </View>
  );
};

DogProfilePage.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default DogProfilePage;