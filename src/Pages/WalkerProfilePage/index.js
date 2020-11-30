import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Loading from "../../components/Loading";
import UserBio from "../../comps/UserBio";
import WriteReview from "../../comps/WriteReview";
import LocationAge from "../../comps/LocationAge";
import AvatarWithName from "../../comps/Avatar/AvatarWithName";
import { useUserState } from "../../hook/useUserState"
import LeaveReview from "../LeaveReviewPage";

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
    marginTop:50,
    marginBottom:10
  },
});

const WalkerProfilePage = ({route}) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [profileState, setProfileState] = useState(null)
  const [userState] = useUserState();
  const { profile, isVisitor } = route.params;


  const fetchProfile = async(profileId) =>{
      setIsLoading(true);
      const initialProfile = await getWalkerProfile(profileId);
      if(initialProfile) setProfileState(initialProfile);
    }
  
  useEffect(() => {
    if(profile) {
    setProfileState({...profile});
    //console.log("profile", profile)
    //console.log("profile state", profileState)
  } else {
    fetchProfile(userState.user.uid);
   }
   setIsLoading(false);
  },[])
  
  return isLoading?
  (
    <Loading />
  )
  :
  ( 
    <View style={styles.app}>
      <ScrollView>
        <View style={styles.Cont}>
          <View style={styles.elements}>
            <AvatarWithName avatarUrl={{uri:profileState.avatarUrl}} name={profileState.name} />
          </View>
          <View style={styles.elements}>
            <LocationAge profile={profileState}/>
          </View>
          <View style={styles.elements}>
            <UserBio bio={profileState.bio}/>
          </View>
          <View style={styles.elements}>
            <WriteReview isVisitor={isVisitor} profile={profileState}/>
          </View>
        </View>
      </ScrollView> 
    </View>
  );
};


export default WalkerProfilePage;