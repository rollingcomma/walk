import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const MainCont = styled.View`
  /* background-color: red; */
  width: 375px;
  min-height: 16px;
  max-height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 40px;
`;

const Cont = styled.View`
  width: 330px;
  min-height: 16px;
  max-height: 120px;
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.View`
  flex: 1;
  /* background-color: #bbb; */
  display: flex;
  align-items: center;
  padding-right: 6px;
`;

const RightSide = styled.View`
  flex: 8;
  /* background-color: #bdb; */
  background: #eaf6f7;
  border-radius: 0px 6px 6px 6px;
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
const MsgSent = ({ msgSent }) => {
  return (
    <View>
      <MainCont>
        <Cont>
          <RightSide>
            <Text multiline>{msgSent}</Text>
          </RightSide>
          <LeftSide>
            <ImgCont>
              <Img source={avatar} />
            </ImgCont>
          </LeftSide>
        </Cont>
      </MainCont>
    </View>
  );
};

MsgSent.defaultProps = {
  avatar: null,
  msgSent: "defaultmessage"
};
export default MsgSent;
