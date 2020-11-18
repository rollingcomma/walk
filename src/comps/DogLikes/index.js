import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const TextCont = styled.View`
  display: flex;
  align-items:center;
  width:150;
  height:50;
`;
const Titletext = styled.Text`
  color: #000;
  font-weight:bold;
  font-size:16;
`;
const Description = styled.Text`
  color: #000;
  font-size:14;
`;

const DogLikes = () => {
  return (
    <View>
      <TextCont>
        <Titletext>Likes</Titletext>
        <View>
        <Description>Swimming</Description>
        <Description>Playing catch</Description>
        </View>
      </TextCont>
    </View>
  );
};

export default DogLikes;
