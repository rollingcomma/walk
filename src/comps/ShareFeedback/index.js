import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #000;
  justify-content: left;
  align-items: left;
  text-align: left;
  font-weight: 400;
`;
const Titletext = styled.Text`
  color: #000;
  justify-content: left;
  align-items: left;
  text-align: left;
  font-weight: 500;
`;

const TextCont = styled.View`
  display: flex;
  /* top: 300%; */
  /* padding-top: 40px; */
  align-items: column;
  /* margin-left: 20px; */
`;

const ShareFeedback = () => {
  return (
    <View>
      <TextCont>
        <Titletext>
          <Text>Help others by sharing feedback</Text>
        </Titletext>
        <Description>
          <Text>Describe your experience with this walker.</Text>
        </Description>
      </TextCont>
    </View>
  );
};

export default ShareFeedback;
