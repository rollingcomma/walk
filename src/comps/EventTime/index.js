import React, { useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const MainCont = styled.View`
  width: 260px;
  height: 27px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 30px;
`;
const Title = styled.View`
  flex: 1;
  /* background-color: #bcb; */
`;
const TitleText = styled.Text`
  font-weight: 500;
  font-size: 13px;
  margin-top: 4px;
`;
const Start = styled.View`
  flex: 1;
  /* background-color: #ccb; */
  align-items: center;
`;
const End = styled.View`
  flex: 1;
  /* background-color: #bcc; */
  align-items: center;
`;
const StartInput = styled.TextInput`
  width: 80%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #d6d6dd;
`;
const EndInput = styled.TextInput`
  width: 80%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #d6d6dd;
`;
const Line = styled.View`
  width: 10px;
  height: 2px;
  border-radius: 12px;
  background-color: black;
`;
const LineCont = styled.View`
  height: 100%;
  width: 10px;
  display: flex;
  justify-content: center;
`;
const EventTime = () => {
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  return (
    <View>
      <MainCont>
        <Title>
          <TitleText>Time</TitleText>
        </Title>
        <Start>
          <StartInput
            onChangeText={(t) => {
              alert(t);
              eventStartTime(setEventStartTime);
            }}
          />
        </Start>
        <LineCont>
          <Line />
        </LineCont>
        <End>
          <EndInput
            onChangeText={(t) => {
              alert(t);
              eventEndTime(setEventEndTime);
            }}
          />
        </End>
      </MainCont>
    </View>
  );
};

EventTime.defaultProps = {};
export default EventTime;
