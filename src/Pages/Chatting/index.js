import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";


import MsgSent from "../../comps/MsgSent";
import MsgRecieved from "../../comps/MsgRecieved";
import Texting from "../../comps/Texting";

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

const Chatting = () => {
  return (
      <Main>
        <ScrollView>
        <MainCont>
            <MsgSent 
            msgSent="hi"/>
            <MsgRecieved 
            msgRecieve="hello"/>
        </MainCont>
        </ScrollView>
            <Texting />
      </Main>
  );
};

export default Chatting;