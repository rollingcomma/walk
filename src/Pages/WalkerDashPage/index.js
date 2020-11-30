import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Loading from "../../components/Loading";
import DashDog from "../../comps/DashDog";
import DashOwner from "../../comps/DashOwner";

import MapPlaceholder from "../../comps/MapPlaceholder";
import { findUser, getDogProfileByOwner } from "../../db/DBUtils";

const styles = StyleSheet.create({
  app: {
    justifyContent:"center",
    // alignItems:"center",
    width:"100%",
    height:"100%"
  },
  container:{
    alignItems:"center",
    marginTop:40,
  
  },
  map: {
    width:"100%",
    height:"100%",
  },
  dashcont: {
    flexDirection: "row",
    width: 360,
    justifyContent:"space-between",
    marginTop:40
  },
  
});

const WalkerDashPage = ({route}) => {
  const {sender, handleCompleteRequest} = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [ownerProfile, setOwnerProfile] = useState(null);
  const[dogProfile, setDogProfile] = useState(null);

  useEffect(()=> {
    async function fetchData(){
      const owner = await findUser(sender);
      const dog = await getDogProfileByOwner(sender);
      console.log("owner", dog);
      if(dog && owner) {
        setOwnerProfile(owner);
        setDogProfile(dog.value);
      }
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
            <MapPlaceholder coords={dogProfile.coords} text="Return Address"/>
            <View style={styles.dashcont}>
              <DashDog dogProfile={dogProfile}/>
              <DashOwner dogProfile={dogProfile} ownerProfile={ownerProfile}/>
            </View>
          </View>
        </ScrollView>
        
      </View>
  );
};

WalkerDashPage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};


export default WalkerDashPage;