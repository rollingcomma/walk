import React from "react";
import { View, Text, StyleSheet} from "react-native";
import TopBar from '../TopBar';
// import AvatarViewProfile from '../AvatarForm/AvatarViewProfile';

const styles = StyleSheet.create({
  app: {
    // flexDirection: "row",
    // justifyContent:"space-between",
  },
  
});

const OwnerDashPage = ({}) => {
 
  return (
      <View style={styles.app}>
        <TopBar title="Dashboard" />
        
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