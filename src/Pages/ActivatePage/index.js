import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Loading from "../../components/Loading";
import AvatarFormText from '../../comps/AvatarForm/AvatarFormText';
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import Spacer from "../../comps/Spacer";
import { useNavigation } from '@react-navigation/native';
import { getAllChannelsByUid } from "../../db/DBUtils";
import { useUserState } from "../../hook/useUserState";
import { FlatList } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";

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

const ActivatePage = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [channels, setChannels] = useState(null);
  const [channel, setChannel] = useState(null);
  const navigation = useNavigation();
  const [ userState ] = useUserState();

  const handleOnPress = (channelId) => {
    channel = channels.filter(channel=> channel.id == channelId)
    navigation.navigate("Chatting", {channel: channel});
  }
  
  useEffect(()=> {
    async function fetchData() {
      const initialChannels = await getAllChannelsByUid(userState.user.uid, 10);
      console.log(initialChannels);
      if(initialChannels) setChannels(initialChannels);
      setIsLoading(false);
      console.log("initial",initialChannels[0].messages[0])
    }
    fetchData();
  }, [])
  
  return isLoading? 
    (
      <Loading />
    ) 
    : 
    (
    <View style={styles.container}>
      <FlatList
        data={channels}
        keyExtractor={channel=>channel.id.toString()}
        renderItem={({item}) => 
          //  item.messages[0] &&
          <View>
          <View style={styles.avatarcont}>
            <BasicAvatar
              image1={item.messages[0].message.sender == item.user1?{uri: item.user1AvatarUrl} : {uri:item.user2AvatarUrl}}
              width={64}
              height={64} />
            <AvatarFormText
              index={item.id}
              textName={item.messages[0].message.sender == item.user1? item.user1Name : item.user2Name}
              text={item.messages[0].message.message}
              backgroundColor={"#53B7BE"}
              handleOnPress={handleOnPress}
            />
          </View>
          <View style={styles.spacer}>
            <Spacer />
          </View>
        </View>
      }
      refreshing={refreshing}
      onRefresh={() => {
        handleRefresh();
      }}
      />
    </View>)
  
};

// RequestPage.defaultProps = {
//     // size: null,
//     text: null,
//     backgroundColor: null,
//     // height: null
// };

export default ActivatePage; 