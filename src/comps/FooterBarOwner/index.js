import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";

const Usericon = styled.TouchableOpacity``;

const Chaticon = styled.TouchableOpacity``;

const Addicon = styled.TouchableOpacity``;

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
  /* background: #fff; */
  padding: 15px;
  /* width: 375px; */
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

const NewImg = styled.Image`
  width: 70px;
  height: 40px;
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
const add = require("./new.png");
const chat = require("./chat.png");
const activechat = require("./activechat.png");
const user = require("./user.png");
const activeuser = require("./activeuser.png");

const FooterBar = ({state, descriptors, navigation}) => {
  
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if(focusedOptions.tabBarVisible === false) {return null}
  
  return (
    <View>
      <Footcontainer>
        <Icons>
        { 
          state.routes.map((route, routeIndex) => {
            // const { options } = descriptors[route.key];
            const isRouteActive = routeIndex === state.index;
            const onPress = () =>  {
              const event = navigation.emit({
                type:'tabPress',
                target:route.key,
                canPreventDefault:true,
              });
              if(!isRouteActive && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type:'tabLongPress',
                target:route.key
              });
            }
            
            switch (routeIndex) {
              case 0: return(
                <Homeicon
                  key={routeIndex}
                  onPress={onPress}
                  onLongPress={onLongPress}
                >
                <HomeImg source={!isRouteActive? home : activehome} />
              </Homeicon>
              )
              case 1: return(
                <Eventicon
                  key={routeIndex}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  >
                  <EventImg source={!isRouteActive? events : activeevents} />
                </Eventicon>
              )
              case 2: return(
                <Addicon
                  key={routeIndex}
                  onPress={onPress}
                  onLongPress={onLongPress}
                >
                  <NewImg source={add} />
                </Addicon>
              )
              case 3: return(
                <Chaticon
                  key={routeIndex}
                  onPress={onPress}
                  onLongPress={onLongPress}
                >
                  <ChatImg source={!isRouteActive? chat : activechat} />
                </Chaticon>
              )
              case 4: return(
                <Usericon
                  key={routeIndex}
                  onPress={onPress}
                  onLongPress={onLongPress}
                >
                  <UserImg source={!isRouteActive? user : activeuser} />
                </Usericon>)
              default: return;
            }
          })
        } 
      </Icons>
      </Footcontainer>
    </View>
  );
};

FooterBar.defaultProps = {
  onPress: () => {}
};
export default FooterBar;
