import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const MainCont = styled.View`
  /* background-color: red; */
  width: 375px;
  min-height: 16px;
  max-height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background-color: blue; */
  margin-top: 20px;
`;

const Cont = styled.View`
  width: 330px;
  min-height: 16px;
  max-height: 120px;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
`;

const LeftSide = styled.View`
  flex: 1;
  /* background-color: #bbb; */
  display: flex;
  align-items: center;
  padding-left: 6px;
  margin-right:10px;
`;

const RightSide = styled.View`
  flex: 8;
  background-color: #eaf6f7;
  border-radius: 6px;
  padding:15px;
`;

const ImgCont = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  
  
  /* background-color: blue; */
`;
const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  
`;
const avatar = require("./selfie.jpg");

const MsgRecieved = ({ msgRecieve }) => {
  return (
    <View>
      <MainCont>
        <Cont>
          <LeftSide>
            <ImgCont>
              <Img source={avatar} />
            </ImgCont>
          </LeftSide>
          <RightSide>
            <Text multiline>{msgRecieve}</Text>
          </RightSide>
        </Cont>
      </MainCont>
    </View>
  );
};

MsgRecieved.defaultProps = {
  avatar: "selfie.jpg",
  msgRecieve: "de"
};
export default MsgRecieved;
