import React, {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AvatarFormText from '../../AvatarForm/AvatarFormText';
import BasicAvatar from "../../Avatar/BasicAvatar";
import { channelListener } from "../../../db/DBUtils";
import Loading from "../../../components/Loading";
import { useUserState } from "../../../hook/useUserState";

export default function Channel({item}) {
  const [ channel, setChannel] = useState(item);
  const [latestMessage,setLatestMessage] = useState(item.messages[0].message);
  const navigation = useNavigation();
  
  const handleLastMsgUpdate = (newMessages) => {
    setLatestMessage(newMessages);
  }

  const handleOnPress = () => {
    navigation.navigate("Chatting", {channel: channel, handleChannelUpdate: handleLastMsgUpdate});
  }
  
  return(
    <>
      <View style={styles.avatarcont}>
            <BasicAvatar
              image1={latestMessage.sender == channel.user1?{uri: channel.user1AvatarUrl} : {uri:channel.user2AvatarUrl}}
              width={64}
              height={64} />
            <AvatarFormText
              index={channel.id}
              textName={latestMessage.sender == channel.user1? channel.user1Name : channel.user2Name}
              text={latestMessage.message}
              backgroundColor={"#53B7BE"}
              handleOnPress={handleOnPress}
            />
            </View>
    </>
    )
}
const styles = StyleSheet.create({
  avatarcont: {
      marginLeft:20,
      flexDirection:"row",
      height:130,
  }
});