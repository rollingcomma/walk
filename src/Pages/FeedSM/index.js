
import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";


import Popup from "../../comps/Popup";
import Post from "../../comps/Post"
// import FooterBar from "../../comps/FooterBar";

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* z-index: auto; */
  /* margin: 30px 30px; */
`;
const MainCont = styled.View`
  z-index: 1;
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
  /* overflow: scroll; */
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 70;
  position: absolute;
`;
const Opactiy = styled.View`
  width: 375px;
  height: 812px;
  background-color: "rgba(52, 52, 52, 0.8)";
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Feed_SM = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Opactiy>
            <Popup></Popup>
          </Opactiy>
          <Cont>
            <Post />
          </Cont>
          {/* <FooterCont>
            <FooterBar />
          </FooterCont> */}
        </MainCont>
      </Main>
    </View>
  );
};

export default Feed_SM;
