import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import AvatarFormText from '../../comps/AvatarForm/AvatarFormText';
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import Spacer from "../../comps/Spacer";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    height:"100%",
  },
  spacer: {
    height:10
  },
  avatarcont: {
      marginLeft:20,
      flexDirection:"row",
      height:130,
  }
});

const RequestPage = ({}) => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("Chatting");
}
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.avatarcont}>
            <BasicAvatar
              image1={require('../../comps/Avatar/face1.jpg')}
              width={64}
              height={64} />
            <AvatarFormText
              textname={"Bob S."}
              text={"Such great weather today!"}
              backgroundColor={"#53B7BE"}
              handleOnPress={handleOnPress}
            />
          </View>
          <View style={styles.spacer}>
            <Spacer />
          </View>
        </View>

      </ScrollView>
 
    </View>
  );
};

RequestPage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default RequestPage; 