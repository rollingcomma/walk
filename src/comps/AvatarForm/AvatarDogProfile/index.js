import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import BasicAvatar from '../../Avatar/BasicAvatar';
import AvatarEdit from '../../Avatar/AvatarEdit';
import DogDislikes from "../../DogDislikes";
import DogInfo from "../../DogInfo";
import DogLikes from "../../DogLikes";

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    marginTop:10,
    height:360
  },
  doginfo: {
      width:100,
      height:100
  },
  textcont23: {
    justifyContent:"space-between",
    flexDirection: "row",
      width:300,
      height:300
  },
  dogliks: {
      width:100,
      alignItems:"center",
  },
  dogdisliks: {
      width:100,
      alignItems:"center",
  }

});
 
const AvatarDogProfile = ({}) => {
  
  return (
      <View style={styles.container}>
        <AvatarEdit/>
        <View style={styles.doginfo}>
          <DogInfo/>
        </View>
        <View style={styles.textcont23}>
            <View style={styles.dogliks}>
              <DogLikes/>
            </View>
            <View style={styles.dogdisliks}>
              <DogDislikes/>
            </View>
        </View>
      </View>
  );
};

AvatarDogProfile.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default AvatarDogProfile;