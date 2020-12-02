import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Loading from "../../components/Loading";
import DogPhotos from '../../comps/DogPhotos';
import TopBar from "../../comps/TopBar";
import AvatarDogProfile from "../../comps/AvatarForm/AvatarDogProfile";
import { getDogProfileByOwner, logout } from "../../db/DBUtils";
import { useUserState } from "../../hook/useUserState";

const styles = StyleSheet.create({
  app: {
     height:"100%",
  },
  AvatarDogProfile: {
    marginBottom:0,
    marginTop:50,
  },
});

const DogProfilePage = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userState, dispatchUser] = useUserState();
  const [profileState, setProfileState] = useState(null);
  const [isVisitorState, setIsVisitorState] = useState(false);
  let profile = null, isVisitor;
  
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
        const initialProfile = await getDogProfileByOwner(userState.user.uid);
        if(initialProfile) {
          setProfileState(initialProfile.value);
          const newUserState = {...userState};
          newUserState.user.profile = initialProfile.value;
          dispatchUser(newUserState);
        };
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
        <TopBar title="Profile" textRight="Logout" onPressRight={handleLogout} />
        <ScrollView>
          <View style={styles.AvatarDogProfile}>
           <AvatarDogProfile isVisitor={isVisitorState} profile={profileState}/>
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