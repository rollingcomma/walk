import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #565555;
  text-align: left;
  font-size:12px;
`;
const Titletext = styled.Text`
  color: #000;
  text-align: left;
  font-weight: bold;
  font-size:14px;
`;

const TextCont = styled.View`
  display: flex;
`;

const Posts = () => {
  return (
    <View>
      <TextCont>
        <Titletext>
          <Text>Posts</Text>
        </Titletext>
        <Description>
          <Text>Show people what you've been up to!</Text>
        </Description>
      </TextCont>
    </View>
  );
};

export default Posts;
