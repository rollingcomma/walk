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

const UserBio = () => {
  return (
    <View>
      <TextCont>
        <Biotitle>
          <Text>Biography</Text>
        </Biotitle>
        <Biodesc>
          <Text>
            “Hi there! My name is Mason and I love all animals. Dogs, cats,
            birds, you name it. I really love spending time outdoors in nature
            and going for hikes and walks. During COVID, I’ve been trying to
            stay busy by picking up new hobbies such as reading and tennis.”
          </Text>
        </Biodesc>
      </TextCont>
    </View>
  );
};

export default UserBio;
