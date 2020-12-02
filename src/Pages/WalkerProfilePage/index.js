import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Loading from "../../components/Loading";
import UserBio from "../../comps/UserBio";
import WriteReview from "../../comps/WriteReview";
import LocationAge from "../../comps/LocationAge";
import TopBar from "../../comps/TopBar";
import AvatarWithName from "../../comps/Avatar/AvatarWithName";
import { useUserState } from "../../hook/useUserState"
import { getWalkerProfile, logout } from "../../db/DBUtils";
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
    marginTop:30,
    marginBottom:10
  },
});

const WalkerProfilePage = ({route}) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [profileState, setProfileState] = useState(null)
  const [userState, dispatchUser] = useUserState();
  const [isVisitorState, setIsVisitorState] = useState(false);
  let profile = null, isVisitor= false;

  const handleLogout = () => {
    if(logout())
    dispatchUser(null);
  }

  useEffect(() => {
    async function fetchData() {
      if(route && route.params) {
        profile = route.params.profile;
        isVisitor = route.params.isVisitor;
      }
      if(profile) {
        setProfileState({...profile});
        setIsVisitorState(isVisitor);
      } else {
        //await fetchProfile(userState.user.uid);
        const initialProfile = await getWalkerProfile(userState.user.uid);
        if(initialProfile) setProfileState(initialProfile);
        const newUserState = {...userState};
        newUserState.user.profile = initialProfile;
        dispatchUser(newUserState);
      }
      setIsLoading(false);
    }
    fetchData(); 
   
  },[])
  
  return isLoading?
  (
    <Loading />
  )
  :
  ( 
    <View style={styles.app}>
      {userState.user.uid === profileState.uid && <TopBar title="Profile" textRight="Logout" onPressRight={handleLogout} />}
      <ScrollView>
        <View style={styles.Cont}>
          <View style={styles.elements}>
            <AvatarWithName isVisitor={isVisitorState} avatarUrl={{uri:profileState.avatarUrl}} name={profileState.name} />
          </View>
          <View style={styles.elements}>
            <LocationAge profile={profileState}/>
          </View>
          <View style={styles.elements}>
            <UserBio bio={profileState.bio}/>
          </View>
          <View style={styles.elements}>
            <WriteReview isVisitor={isVisitorState} profile={profileState}/>
          </View>
        </View>
      </ScrollView> 
    </View>
  );
};


export default WalkerProfilePage;