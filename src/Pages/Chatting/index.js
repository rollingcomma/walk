import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import styled from "styled-components/native";

import Loading from "../../components/Loading";
import MsgSent from "../../comps/MsgSent";
import MsgRecieved from "../../comps/MsgRecieved";
import Texting from "../../comps/Texting";

import { useUserState } from "../../hook/useUserState";
import { createMessage, channelListener } from "../../db/DBUtils"

const Main = styled.View`
  flex: 1;
 
`;
const Inner = styled.View`
  flex:1;
  /* flex-direction: column; */
  justify-content:flex-end;
  
  
`
const MainCont = styled.View`

`;

const Cont = styled.View`
  width: 100%;
  height: 86%;
  flex-direction: column;
  bottom: 70;
  position: absolute;
`;

const Chatting = ({route }) => {
  const [ userState ] = useUserState();
  const [refreshing, setRefreshing] = useState(false);
  const [channel] = useState(route.params.channel);
  const [messages, setMessages] = useState(route.params.channel.messages);
  const {handleChannelUpdate} = route.params;

  const handleRefresh = () => {
    
  }
  
  const handleNewMessage = async (msg) => {
    const message = {
      message: msg,
      sender:userState.user.uid,
      createdAt: new Date(),
    }
    await createMessage(channel.id, message);
  }

  useEffect(()=> {
    console.log("channel")
    const unsubscribe = channelListener(setMessages, channel.id);
    return () => unsubscribe();
    
  }, [])

  useEffect(() => {
    if(messages)
      handleChannelUpdate(messages[0].message);
      console.log("message",messages[0].message)
  }, [messages])

  return(
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}>
      <Main>
        <Inner>
        <FlatList
        inverted
        data={messages}
        extraData={messages}
        keyExtractor={message =>message.id.toString()}
        renderItem={({item}) => 
          <MainCont>
            { item.message.sender == userState.user.uid?
            <MsgSent 
            msgSent={item.message.message}
            avatar={{uri:userState.user.avatarUrl}}/>
            :
            <MsgRecieved 
            msgRecieve={item.message.message}
            avatar={item.message.sender == channel.user1?{uri: channel.user1AvatarUrl} : {uri:channel.user2AvatarUrl}}/>
            }
          </MainCont>
      }
      refreshing={refreshing}
      onRefresh={() => {
        handleRefresh();
      }}
      />
    
        {/* <ScrollView>
        <MainCont>
            <MsgSent 
            msgSent="hi"/>
            <MsgRecieved 
            msgRecieve="hello"/>
        </MainCont>
        </ScrollView> */}
        
        <Texting handleNewMessage={handleNewMessage} />
        <View style={{flex:1}} />
          </Inner>
      </Main>
      </KeyboardAvoidingView>
  );
};

export default Chatting;