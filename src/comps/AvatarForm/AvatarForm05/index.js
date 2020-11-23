import React from "react";
import { View, Text, StyleSheet} from "react-native";
import BasicAvatar from '../../Avatar/BasicAvatar';
import ReviewStars from "../../ReviewStars";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems:"center",
    // justifyContent:"center",
  },
  avatar: {
    // marginLeft:20
  },
reviewcont: {
    marginLeft:20,
    justifyContent:"center"
},
name: {
  fontWeight:"bold",
  fontSize:18,
  marginBottom:10,
}
});

const AvatarForm05 = ({name}) => {
  
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
            <Text style={styles.name}>{name}</Text>
            <ReviewStars/>
        </View>
      </View>
  );
};

AvatarForm05.defaultProps = {
    name: null,
    text: null,
    backgroundColor: null,
};

export default AvatarForm05;