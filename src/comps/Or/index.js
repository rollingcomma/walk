import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Ortext = styled.Text`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* padding-top: 20px; */
  /* margin-left: 144px; */
`;

const Or = () => {
  return (
    <View>
      <Ortext>
        <Text>or</Text>
      </Ortext>
    </View>
  );
};

export default Or;
