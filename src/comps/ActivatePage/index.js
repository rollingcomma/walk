import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import TopBar from '../TopBar';
import AvatarViewProfile from '../AvatarForm/AvatarViewProfile';
import BasicAvatar from "../Avatar/BasicAvatar";
import DeclineButton from "../WButton/DeclineButton";
import ActivateButton from "../WButton/ActivateButton";
import Spacer from "../Spacer";
import FooterBar from "../FooterBar";
import MsgSelection from "../MsgSelection";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  container: {
      marginLeft:30,
      flexDirection:"row",
      height:130,
      alignItems:"center"
  },
  buttons: {
    marginLeft:30
  },
  spacer: {
    height:20
  },
});

const ActivatePage = ({}) => {
 
  return (
      <View style={styles.app}>
        <TopBar title="Inbox" />
        <MsgSelection style={styles.selection}/>
        <ScrollView>
          <View style={styles.container}>
            <BasicAvatar
            image1={require('../.../../comps/Avatar/face3.jpg')}
            width={64}
            height={64}/>
            <AvatarViewProfile
            textName={"Mason K."}
            textView={"View Profile"}
            text={"Cute Pup! I want to walk him"}
            />
            <View style={styles.buttons}>
            <ActivateButton />
            <DeclineButton />
            </View> 
          </View>
          <View style={styles.spacer}>
             <Spacer/> 
          </View>
        </ScrollView>
        <FooterBar style={styles.footerBar} />
      </View>
  );
};

ActivatePage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default ActivatePage;