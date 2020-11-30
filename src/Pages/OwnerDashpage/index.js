import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Loading from "../../components/Loading";
import MapPlaceholder from "../../comps/MapPlaceholder";
import WalkerProfile from "../../comps/WalkerProfile";
import { getWalkerProfile } from "../../db/DBUtils";

const styles = StyleSheet.create({
  app: {
    justifyContent:"center",
    // alignItems:"center",
    // width:"100%",
    height:"100%"
  },
  container:{
    alignItems:"center",
    marginTop:40,
  
  },
  map: {
    
  },
  dashcont: {
    flexDirection: "row",
    width: 360,
    justifyContent:"space-between",
    marginTop:50,
    marginBottom:40
  },
  
});

const OwnerDashPage = ({route}) => {
  
  const {sender, handleCompleteRequest} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);

 useEffect(()=> {
  async function fetchData(){
    const result = await getWalkerProfile(sender);
    if(result) setProfile(result);
    setIsLoading(false);
  }
  fetchData();
 }, [])
  return isLoading? 
    (
      <Loading />
    ) 
    : 
    (
      <View style={styles.app}>
        <ScrollView>
            
          <View style={styles.container}>
            <MapPlaceholder coords={profile.coords} text="Walker Location"/>
            <View style={styles.dashcont}>
              <WalkerProfile profile={profile}/>
            </View>
          </View>
        </ScrollView>
      </View>
  );
};

OwnerDashPage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};


export default OwnerDashPage;