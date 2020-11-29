import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Loading from "../../components/Loading";
import UserBio from "../../comps/UserBio";
import WriteReview from "../../comps/WriteReview";
import LocationAge from "../../comps/LocationAge";
import AvatarWithName from "../../comps/Avatar/AvatarWithName";
import { useUserState } from "../../hook/useUserState"

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
  console.log(route.params);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null)
  const [userState] = useUserState();
  const isVisitor = route.params.profileId;
  const profileId  = route.params.profileId || userState.user.uid;

   useEffect(() => {
    async function fetchData() {
      const initialProfile = await getWalkerProfile(profileId);
      if(initialProfile) setProfile(initialProfile);
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
      <ScrollView>
        <View style={styles.Cont}>
          <View style={styles.elements}>
            <AvatarWithName text={profile.name} />
          </View>
          <View style={styles.elements}>
            <LocationAge profile={profile}/>
          </View>
          <View style={styles.elements}>
            <UserBio bio={profile.bio}/>
          </View>
          <View style={styles.elements}>
            <WriteReview isVisitor={isVisitor}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default WalkerProfilePage;