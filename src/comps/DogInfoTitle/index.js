import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Titletext = styled.Text`
  /* margin-top: 20px;
  margin-left: 20px; */
  color: #000;
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

const DogInfoTitle = () => {
  return (
    <View>
      <Titletext>
        <Text>Dog Information</Text>
      </Titletext>
    </View>
  );
};

export default DogInfoTitle;
