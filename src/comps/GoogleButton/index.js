import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const ButtonBox = styled.TouchableOpacity`
  /* display: flex; */
  flex-direction: row;
  background: ${(props) => (props.highlight ? "#F1F1F1" : "#FFF")};
  width: 288px;
  height:51px;
  align-items:center;
  border: 0.5px solid #959494;
  /* justify-content:center; */
  /* padding: 6px; */
  /* margin-bottom: 50px; */
  /* box-sizing: border-box;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25); */
`;

const Buttontext = styled.Text`
  color: #000;
  margin-left:40;
  /* align-items: center;
  justify-content: center;
  display: flex; */
  /* width: 300px;
  margin-right: 25px;
  font-weight: 400; */
`;

const GoogleImg = styled.Image`
  width: 30px;
  height: 30px;
  margin-left:20;
  /* object-fit: contain; */
`;

const google = require("./google.png");

const GoogleButton = ({onPress}) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <View>
        <ButtonBox
          onPress={()=> onPress()}
          //highlight={highlight}
        >
          <GoogleImg source={google} />
          <Buttontext>
            <Text>Sign in With Google</Text>
          </Buttontext>
        </ButtonBox>
    </View>
  );
};

// GoogleButton.defaultProps = {
//   onPress: () => {}
// };

export default GoogleButton; 
