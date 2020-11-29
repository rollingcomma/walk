import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AvatarFormText from '../../AvatarForm/AvatarFormText';
import BasicAvatar from "../../Avatar/BasicAvatar";

export default function Channel({item}) {
  const [ channel, setChannel] = useState(item);
  const [latestMessage, setLatestMessage] = useState(channel.messages[channel.messages.length-1].message);
  const navigation = useNavigation();
  
  const handleNewMessage = async (channelId, msg) => {
    const messageId = await createMessage(channelId, msg);
    if(messageId) {
      const newChannel = {...channel}
      newChannel.messages.push({id:messageId, message:msg});
      setChannel(newChannel);
    }
  }

  const handleOnPress = () => {
    navigation.navigate("Chatting", {channel: channel, handleNewMessage: handleNewMessage});
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
              handleNewMessage={handleNewMessage}
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