import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native";
import styled from "styled-components/native";

import Loading from "../../components/Loading";
import MsgSent from "../../comps/MsgSent";
import MsgRecieved from "../../comps/MsgRecieved";
import Texting from "../../comps/Texting";
import { useUserState } from "../../hook/useUserState";

const Main = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
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
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const {channel, handleMessageSend} = route.params;
  const [messages, setMessages] = useState(channel.messages);
  console.log("chatting",messages)
  
  const handleRefresh = () => {
    
  }
  // isLoading? 
  //   (
  //     <Loading />
  //   ) 
  //   : 
    
  return (
      <Main>
        <FlatList
        data={messages}
        keyExtractor={message =>message.id.toString()}
        renderItem={({item}) => 
          //  item.messages[0] &&
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
            <Texting onPress={handleMessageSend} />
      </Main>
  );
};

export default Chatting;