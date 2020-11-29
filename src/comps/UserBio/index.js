import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Biodesc = styled.Text`
  color: #565555;
  font-weight: 400;
  margin-left: 5px;
`;

const Biotitle = styled.Text`
  font-weight: bold;
  color: #000;
  padding-bottom: 5px;
  font-size:18;
  
`;

const TextCont = styled.View`
  display: flex;
  /* margin-left: 20px; */
  padding-top: 30px;
  width: 255px;
  height: 220px;
  /* align-items: left; */
  text-align: left;
  font-size:16;
`;

const UserBio = ({bio}) => {
  return (
    <View>
      <TextCont>
        <Biotitle>
          <Text>Biography</Text>
        </Biotitle>
        <Biodesc>
          <Text>
           {bio}
          </Text>
        </Biodesc>
      </TextCont>
    </View>
  );
};

export default UserBio;
