import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import TopBar from "../../comps/TopBar";
import EventInfo from "../../comps/EventInfo";
// import FooterBar from "../../comps/FooterBar";
import Spacer from "../../comps/Spacer";

const Header = styled.View``;

const SpacerCont = styled.View`
  margin-top: 20px;
  padding-bottom: 20px;
`;

const EventsCont = styled.View`
  /* margin-right: 70px;
  margin-top: 20px; */
  display: none;
`;

const FooterCont = styled.View`
  width: 375px;
  position: absolute;
  bottom: 0;
`;

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
`;

const MainCont = styled.View`
  width: 100%;
  height: 812px;
`;

const Cont = styled.View`
  width: 100%;
  height: 86%;
  /* background-color: blue; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Events = () => {
  return (
    <View>
      <Main>
        <MainCont>
          {/* <Header>
            <TopBar title="Events" />
          </Header> */}
          <Cont>
            <EventsCont>
              <EventInfo />
              <SpacerCont>
                <Spacer />
              </SpacerCont>
            </EventsCont>
          </Cont>
          {/* <FooterCont>
            <FooterBar />
          </FooterCont> */}
        </MainCont>
      </Main>
    </View>
  );
};

export default Events;
