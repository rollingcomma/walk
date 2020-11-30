import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { useUserState } from "../../../hook/useUserState";
import { getDogProfileByOwner, getWalkerProfile } from "../../../db/DBUtils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"space-between",
    // width:"100%",
  },
  textcont: {
    // alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
    width:130
    
  },
  text1: {
    color: "black",
    fontSize:13,
    fontWeight:"bold"
  },
  text2: {
    fontSize: 9,
    color: "#53B7BE"
  },
  text3: {
    fontSize: 13,
    color: "#000000",
    justifyContent:"flex-end",
  },
});

const AvatarViewProfile = ({textName,  text, profileId}) => {
  const navigation = useNavigation();
  const [userState] = useUserState();
  
  const handleViewProfileClick = async ()=> {
    if(userState.user.type === "dog owner") {
      const profile = await getWalkerProfile(profileId);
      if(profile) navigation.navigate("WalkerProfile", {profile: profile, isVisitor:true})
    } else {
      const profile = await getDogProfileByOwner(profileId);
      if(profile) navigation.navigate("OwnerProfile", {profile: profile, isVisitor:true})
    }
  }
  return (
      <View style={styles.container}>
        <View style={styles.textcont}>
            <Text style={styles.text1}>{textName}</Text>
            <TouchableOpacity 
              onPress={() => handleViewProfileClick()}>
              <Text style={styles.text2}>View Profile</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>{text}</Text>
        </View>
        <View>
        </View>
      </View>
  );
};

AvatarViewProfile.defaultProps = {
    textname: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarViewProfile;