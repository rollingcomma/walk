import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Continuetext = styled.Text`
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  color: #53b7be;
  font-size:22;
`;

const ContinueAs = () => {
  return (
    <View>
      <Continuetext>
        Continue as a
      </Continuetext>
    </View>
  );
};

export default ContinueAs; 
