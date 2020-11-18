import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Description from "../.../../comps/Description";
import Dropdown from "../.../../comps/Dropdown";
import Input from "../.../../comps/Input";
import Likes from "../.../../comps/Likes";
import Popup from "../.../../comps/Popup";
import Texting from "../.../../comps/Texting";
import Post from "../.../../comps/Post";
import WalkerProfile from "../.../../comps/WalkerProfile";
import MsgSent from "../.../../comps/MsgSent";
import MsgSelection from "../.../../comps/MsgSelection";
import Birthday from "../.../../comps/Birthday";
import MsgRecieved from "../.../../comps/MsgRecieved";
import DashDog from "../.../../comps/DashDog";
import DashOwner from "../.../../comps/DashOwner";
import AddImage from "../.../../comps/AddImage";
import Spacer from "../.../../comps/Spacer";
import TopBar from "../.../../comps/TopBar";
import AvatarWithName from "../.../../comps/Avatar/AvatarWithName";
import AvatarEdit from "../.../../comps/Avatar/AvatarEdit";
import FooterBar from "../.../../comps/FooterBar";
import Avatar06 from "../.../../comps/Avatar/Avatar06";
import Province from "../.../../comps/Province";
import Button from "../.../../comps/Button";

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  margin: 30px 30px;
`;
const MainCont = styled.View`
  width: 100%;
  height: 812px;
`;
const FooterCont = styled.View`
  width: 375px;
  height: 100px;
  position: absolute;
  bottom: 0;
  /* display: flex; */
  align-items: center;
`;
const Cont = styled.View`
  width: 100%;
  height: 86%;
  overflow: scroll;
  /* display: flex; */
  flex-direction: column;
  /* align-items: center; */
  /* background-color: blue; */
  bottom: 70;
  position: absolute;
`;

const Chatting = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <TopBar imageLeft1={require("../.../../comps/TopBar/leftArrow.png")} />
          <Cont>
            <MsgSent />
            <MsgRecieved />
          </Cont>
          <FooterCont>
            <Texting />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default Chatting;
