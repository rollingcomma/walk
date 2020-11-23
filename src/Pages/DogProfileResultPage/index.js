import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import TopBar from '../../comps/TopBar';
import DogPhotos from '../../comps/DogPhotos';
// import FooterBar from '../../comps/FooterBar';
import AvatarDogProfile from "../../comps/AvatarForm/AvatarDogProfile";
import BasicButton from "../../comps/WButton/BasicButton";
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import DogLikes from "../../comps/DogLikes";
import DogDislikes from "../../comps/DogDislikes";
import AddImage from "../../comps/AddImage";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  container:{
    marginTop:20,
    height:"100%"
  },
  AvatarCont: {
    // marginBottom:0,
    // marginTop:10,
    marginLeft:30,
    flexDirection:"row"
  },
  detailcont: {
    justifyContent:"center",
    alignItems:"center",
    marginLeft:20
  },
  name: {
    fontSize:17,
  },
  age: {
    fontSize:16,
    marginBottom:10
  },
  textCont: {
    flexDirection:"row",
    height:140,
    alignItems:"center",
    justifyContent:"center"
  }
});

const DogProfileResultPage = ({}) => {
 
  return (
<View style={styles.app}>
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.AvatarCont}>
        <BasicAvatar
          image1={require('../../comps/Avatar/dog3.jpg')}
          width={137}
          height={137}
        />
        <View style={styles.detailcont}>
          <Text style={styles.name}>Golden Golden</Text>
          <Text style={styles.age}>age7</Text>
          <BasicButton 
            text="Send Walk Request"  
            backgroundColor= "#38BC64" 
            height={31}
            width={153}
            size={14}
          />
        </View>
      </View>
      <View style={styles.textCont}>
        <DogLikes/>
        <DogDislikes/>
      </View>
      <DogPhotos/>
    </View>
          
          

        </ScrollView>
        {/* <FooterBar /> */}
      </View>
  );
};

DogProfileResultPage.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default DogProfileResultPage;