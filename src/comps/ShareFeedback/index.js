import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #000;
  text-align: left;
  font-size:14px;
`;
const Titletext = styled.Text`
  color: #000;
  text-align: left;
  font-weight: bold;
  font-size:18px;
`;

const TextCont = styled.View`
  display: flex;
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
