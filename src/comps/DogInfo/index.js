import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";


const TextCont = styled.View`
  display: flex;
  align-items:center;
  /* justify-content:center; */
  width:100;
  height:70;
`;
const Titletext = styled.Text`
  color: #000;
  font-weight:bold;
  font-size:28;
`;
const Description = styled.Text`
  color: #000;
  font-size:16;
  justify-content:center;
  align-items:center;
  /* display: flex;
  flex-direction: column; */
`;

const DogInfo = ({name, breed, age}) => {
  return (
    <View>
      <TextCont>
        
          <Titletext>{name}</Titletext>
          <Description>{breed}</Description>
          <Description>Age {age}</Description>
        
      </TextCont>
    </View>
  );
};

export default DogInfo;
