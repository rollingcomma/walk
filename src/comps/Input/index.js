import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";

const InputCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  /*height: 48px;*/
  padding-top:5px;
  padding-bottom:5px;
  /*shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  */
  /* background-color:#DBD; */
`;

const InputTitle = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#CBD; */
  font-size:30;
`;
const Spacer = styled.View`
  flex: 1;
`;
const InputBox = styled.View`
  display: flex;
  width:194px;
  /* background-color:#DDD; */
  minHeight:${props=>props.height ? props.height : "37px"};
`;
const TextInput = styled.TextInput`
  width:100%;
  minHeight:${props=>props.height ? props.height : "37px"};
  border:1px solid #DDD;
`;

const styles = StyleSheet.create({ 
  text: {
    fontSize:13,
    fontWeight:"bold"
  },
});

const Input = ({ value, text, placeholder, onChangeText, multiline}) => {
  // const [contentHeight, setContentHeight] = useState(height);
  return (
    <View>
      <InputCont>
        <InputTitle>
          <Text style={styles.text}>{text}</Text>
        </InputTitle>
        {/* <Spacer /> */}
        <InputBox >
          <TextInput 
            value={value}
            onChangeText={onChangeText} 
            placeholder={placeholder} 
            multiline={multiline}
            // onChange={(e) => {
            //   setContentHeight(e.nativeEvent.contentSize.height);
            // }}
            />
        </InputBox>
      </InputCont>
    </View>
  );
};

Input.defaultProps = {
  text: "default",
  placeholder:"",
  width: "194px",
  height: "27px",
  onChangeText:()=>{}
};

export default Input;
