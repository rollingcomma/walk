import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Bgcolor = styled.View`
  position: relative;
  width: 375px;
  height: 812px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(151, 215, 218, 0.46) 100%
    ),
    linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%), #ffffff;
`;

const Background = () => {
  return (
    <View>
      {/* <Bgcolor></Bgcolor> */}
    </View>
  );
};

export default Background;
