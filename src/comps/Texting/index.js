import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const InputCont = styled.View`
  width: 344px;
  height: 119px;
  /* background-color:#DBB; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: row;
  width: 344px;
  height: 37px;
  /* background-color: #bbd; */
`;

const Add = styled.View`
  flex: 1;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Textbox = styled.View`
  flex: 7;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
`;

const NextArrow = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
`;

const ArrowCont = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  /* background-color: red; */
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
const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 12px;
  border: 1px solid lightgrey;
`;
const Texting = ({}) => {
  return (
    <View>
      <InputCont>
        <Inputs>
          <Add>
            <AddCont
              onPress={() => {
                alert("Send picture in the chat");
              }}
            >
              <IconPics source={(require = "./plus.png")} />
            </AddCont>
          </Add>
          <Textbox>
            <TextInput placeholder="Type a message..." />
          </Textbox>
          <NextArrow>
            <ArrowCont
              onPress={() => {
                alert("Message Sent!");
              }}
            >
              <IconPics source={(require = "./nextarrow.png")} />
            </ArrowCont>
          </NextArrow>
        </Inputs>
      </InputCont>
    </View>
  );
};

Texting.defaultProps = {};

export default Texting;
