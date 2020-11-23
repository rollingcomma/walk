import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";

const Usericon = styled.TouchableOpacity``;

const Chaticon = styled.TouchableOpacity``;

const Eventicon = styled.TouchableOpacity``;

const Homeicon = styled.TouchableOpacity``;

const Icons = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
`;

const Footcontainer = styled.View`
  background: #fff;
  padding: 15px;
  width: 375px;
  bottom: 0;
`;

const UserImg = styled.Image`
  width: 18px;
  height: 19px;
`;

const ChatImg = styled.Image`
  width: 18px;
  height: 18px;
`;

const EventImg = styled.Image`
  width: 18px;
  height: 20px;
`;

const HomeImg = styled.Image`
  width: 25.87px;
  height: 21px;
`;

const home = require("./home.png");
const activehome = require("./activehome.png");
const events = require("./events.png");
const activeevents = require("./activeevents.png");
const chat = require("./chat.png");
const activechat = require("./activechat.png");
const user = require("./user.png");
const activeuser = require("./activeuser.png");

const WalkerFooterBar = ({ onPress }) => {
  const [active, setActive] = useState(4);

  return (
    <View>
      <Footcontainer>
        <Icons>
          <Homeicon
            onPress={() => {
              setActive(1);
              onPress(1);
            }}
          >
            <HomeImg source={active !== 1 ? home : activehome} />
          </Homeicon>
          <Eventicon
            onPress={() => {
              setActive(2);
              onPress(2);
            }}
          >
            <EventImg source={active !== 2 ? events : activeevents} />
          </Eventicon>
          <Chaticon
            onPress={() => {
              setActive(3);
              onPress(3);
            }}
          >
            <ChatImg source={active !== 3 ? chat : activechat} />
          </Chaticon>
          <Usericon
            onPress={() => {
              setActive(4);
              onPress(4);
            }}
          >
            <UserImg source={active !== 4 ? user : activeuser} />
          </Usericon>
        </Icons>
      </Footcontainer>
    </View>
  );
};

WalkerFooterBar.defaultProps = {
  onPress: () => {}
};
export default WalkerFooterBar;
