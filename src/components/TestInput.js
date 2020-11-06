import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const InputCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  height: 48px;
`;

const InputTitle = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.View`
  display: flex;
  flex: 3;
  
`;
const Spacer = styled.View`
  flex: 1;
`;

const TestInput = ({ text, placeholder, height }) => {
  return (
    <View>
      <InputCont>
        <InputTitle>
          <Text>{text}</Text>
        </InputTitle>
        <Spacer />
        <InputBox height={height}>
          <input placeholder={placeholder}></input>
        </InputBox>
      </InputCont>
    </View>
  );
};

TestInput.defaultProps = {
  text: "default",
  placeholder: "default",
  width: "22px",
  height: "40px"
};

export default TestInput;