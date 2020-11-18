import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import FooterBar from "../../comps/FooterBar";
import DashDog from "../../comps/DashDog";
import DashOwner from "../../comps/DashOwner";
import WalkerProfileTitle from "../../comps/WalkerProfileTitle";
import TopBar from "../../comps/TopBar";
import MapPlaceholder from "../../comps/MapPlaceholder";
import Map from "../../components/Map";

const LocationCont = styled.View`
  /* position: relative; */
  top: 2%;
`;

const LocationText = styled.View`
  margin-left: 50px;
  margin-bottom: 10px;
`;

const DashOwnerCont = styled.View`
  padding-left: 5px;
`;

const DashDogCont = styled.View`
  padding-right: 5px;
`;

const DashDogOwnerCont = styled.View`
  /* position: relative; */
  flex-direction: row;
  
  top: 10%;
`;

const Header = styled.View``;

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

const FooterCont = styled.View`
  width: 375px;
  position: absolute;
  bottom: 0;
`;

const Cont = styled.View`
  width: 100%;
  height: 90%;
  /* background-color: blue; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WalkerDashPage = () => {
  return (
    <View>
      <Main>
        <MainCont>
          {/* <Header>
            <TopBar title="Dashboard" />
          </Header> */}
          <Cont>
            <LocationCont>
              <LocationText>
                <WalkerProfileTitle text="Return Address" />
              </LocationText>
             
                <Map />
              
            </LocationCont>
            <DashDogOwnerCont>
              <DashDogCont>
                <DashDog />
              </DashDogCont>
              <DashOwnerCont>
                <DashOwner
                  owneremail="ethan123@gmail.com"
                  owneradress="1234 123A Ave Burnaby, BC"
                />
              </DashOwnerCont>
            </DashDogOwnerCont>
          </Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default WalkerDashPage;
