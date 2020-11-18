import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import FooterBar from "../../comps/FooterBar";
import WalkerProfile from "../../comps/WalkerProfile";
import ReviewStars from "../../comps/ReviewStars";
import WalkerProfileTitle from "../../comps/WalkerProfileTitle";
import TopBar from "../../comps/TopBar";
import MapPlaceholder from "../../comps/MapPlaceholder";

const LocationCont = styled.View`
  /* position: relative; */
  top: 5%;
`;

const LocationText = styled.View`
  margin-left: 50px;
  margin-bottom: 10px;
`;

const WalkerTitleCont = styled.View`
  margin-left: 50px;
  margin-bottom: 10px;
`;

const ReviewStarsCont = styled.View`
  bottom: 17%;
  margin-left: 200px;
`;
const WalkerProfileCont = styled.View`
  /* position: relative; */
  top: 20%;
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
  height: 86%;
  /* background-color: blue; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OwnerDashPage = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Header>
            <TopBar title="Dashboard" />
          </Header>
          <Cont>
            <LocationCont>
              <LocationText>
                <WalkerProfileTitle text="Walker Location" />
              </LocationText>
              <MapPlaceholder />
            </LocationCont>
            <WalkerProfileCont>
              <WalkerTitleCont>
                <WalkerProfileTitle />
              </WalkerTitleCont>
              <WalkerProfile
                age="24"
                bio="Hi there! My name is Ethan and I love all animals. Dogs, cats, birds, you name it. I really love spending time outdoors in nature and ..."
              />
              <ReviewStarsCont>
                <ReviewStars />
              </ReviewStarsCont>
            </WalkerProfileCont>
          </Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default OwnerDashPage;
