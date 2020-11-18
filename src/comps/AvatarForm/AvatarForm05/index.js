import React from "react";
import { View, Text, StyleSheet} from "react-native";
import BasicAvatar from '../../Avatar/BasicAvatar';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  },
  avatar: {
    marginLeft:20
  },
reviewcont: {
    backgroundColor:"lightgray",
    width: 160,
    height:60,
    margin:10
}
});

const AvatarForm05 = ({}) => {
  
  return (
      <View style={styles.container}>
        <View style={styles.avatar}>
            <BasicAvatar 
            image1={require('../../Avatar/face3.jpg')}
            width={134}
            height={134}
            />
        </View>
        <View style={styles.reviewcont}>
            
        </View>
      </View>
  );
};

AvatarForm05.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarForm05;