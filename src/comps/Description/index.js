import React from "react";
import styled from "styled-components/native";
import { View} from "react-native";

const MainCont = styled.View`
  width: 288px;
  height: 103px;
  background-color: #ffffff;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25); */
  border-radius: 3px;
  /* margin:30px 30px; */
`;
const Input1 = styled.TextInput`
  width:100%;
  height:103px;
  /* box-sizing: border-box; */
  padding: 12px 20px;
`;
const Description = ({}) => {
  return (
    <View>
      <MainCont>
        <Input1 multiline placeholder="Type at least 5 words"/>
      </MainCont>
    </View>
  );
};

Description.defaultProps = {};
export default Description;
