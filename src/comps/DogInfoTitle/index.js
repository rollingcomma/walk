import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Titletext = styled.Text`
  color: #000;
  font-weight: bold;
  font-size:14px;
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
