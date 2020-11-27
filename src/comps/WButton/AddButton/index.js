import React from 'react'
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Add = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AddCont = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  /* background-color: red; */
`;

const IconPics = styled.Image`
  width: 100%;
  height: 100%;
`;

const plus = require("./plus.png");

export default function AddButton({onPress}) {
  return (
    <Add>
    <AddCont
      onPress={() => {
        onPress();
      }}
    >
      <IconPics source={plus} />
    </AddCont>
  </Add>
  )
  
}