import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import TopBar from '../../comps/TopBar';
import AvatarViewProfile from '../../comps/AvatarForm/AvatarViewProfile';
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import DeclineButton from "../../comps/WButton/DeclineButton";
import ActivateButton from "../../comps/WButton/ActivateButton";
import Spacer from "../../comps/Spacer";
import { useNavigation } from '@react-navigation/native';
import { useUserState } from "../../hook/useUserState";
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
  const navigation = useNavigation();
  const [userState] = useUserState();
  const handleOnPressViewProfile = () => {
    navigation.navigate("WalkerProfile");
  }
  const handleOnPressActive = () => {
    navigation.navigate("Dashboard");
  }

  const handleOnPressDecline = () => {
    
  }
  return (
      <View style={styles.app}>
        <ScrollView>
          <View style={styles.container}>
            <BasicAvatar
            image1={require('../../comps/Avatar/face3.jpg')}
            width={64}
            height={64}/>
            <AvatarViewProfile
            textName={"Mason K."}
            textView={"View Profile"}
            text={"Cute Pup! I want to walk him"}
            onPress={handleOnPressViewProfile}
            />
            <View style={styles.buttons}>
              <ActivateButton onPress={handleOnPressActive}/>
              <DeclineButton onPress={handleOnPressDecline}/>
            </View> 
          </View>
          <View style={styles.spacer}>
             <Spacer/> 
          </View>
        </ScrollView>
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