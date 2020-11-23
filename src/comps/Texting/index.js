import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const InputCont = styled.View`
  /* background-color:#DBB; */
  margin:10px 0 ;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: row;
  height: 37px;
`;

const Add = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Textbox = styled.View`
  flex: 7;
  display: flex;
  /* justify-content: center; */
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

const nextarrow = require("./nextarrow.png");
const plus = require("./plus.png");

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
              <IconPics source={plus} />
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
              <IconPics source={nextarrow} />
            </ArrowCont>
          </NextArrow>
        </Inputs>
      </InputCont>
    </View>
  );
};

Texting.defaultProps = {};

export default Texting;