import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import DashDog from "../../comps/DashDog";
import DashOwner from "../../comps/DashOwner";

import MapPlaceholder from "../../comps/MapPlaceholder";
// import Map from "../../components/Map";
// import AvatarViewProfile from '../AvatarForm/AvatarViewProfile';

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

const WalkerDashPage = ({}) => {
 
  return (
      <View style={styles.app}>
        <ScrollView>
            
          <View style={styles.container}>
            <MapPlaceholder text="Return Address"/>
            <View style={styles.dashcont}>
              <DashDog/>
              <DashOwner/>
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