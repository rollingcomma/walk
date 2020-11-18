import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TopBar from "../TopBar";
import FooterBar from "../FooterBar";
import UserBio from "../UserBio";
import WriteReview from "../WriteReview";
import LocationAge from "../LocationAge";
import AvatarWithName from "../Avatar/AvatarWithName";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  Cont: {
    marginLeft:20,
    // height:"100%",
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-between"
  },
  elements: {
    marginTop:20,
    marginBottom:10
  },
});

const WalkerProfilePage = () => {
  return (
    <View style={styles.app}>
      <TopBar
        title="Walker Profile"
        imageLeft1={require('../.../../comps/TopBar/leftArrow.png')}
        imageLeft2={require('../.../../comps/TopBar/message.png')}
      />
      <ScrollView>
        <View style={styles.Cont}>
          <View style={styles.elements}>
            <AvatarWithName text="Mason K." />
          </View>
          <View style={styles.elements}>
            <LocationAge />
          </View>
          <View style={styles.elements}>
            <UserBio />
          </View>
          <View style={styles.elements}>
            <WriteReview />
          </View>
        </View>
      </ScrollView>
      <FooterBar />
    </View>
  );
};


export default WalkerProfilePage;
