import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const TextCont = styled.View`
  display: flex;
  align-items:center;
  width:150px;
  height:50px;
`;
const Titletext = styled.Text`
  color: #000;
  font-weight:bold;
  font-size:16px;
`;
const Description = styled.Text`
  color: #000;
  font-size:14px;
`;

const DogDislikes = () => {
  return (
    <View>
      <TextCont>
        <Titletext>Dislikes</Titletext>
        <View>
        <Description>Touching her paws</Description>
        <Description>The smell of oranges</Description>
        </View>
      </TextCont>
    </View>
  );
};

export default DogDislikes;
