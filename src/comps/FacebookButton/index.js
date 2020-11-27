import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const ButtonBox = styled.TouchableOpacity`
  display: flex;
  flex-direction:row;
  align-items:center;
  background: ${(props) => (props.highlight ? "#F1F1F1" : "#FFF")};
  width: 288px;
  height:51px;
  border: 0.5px solid #959494;
  /* padding: 6px; */
  /* box-sizing: border-box;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25); */
`;

const FacebookImg = styled.Image`
  margin-left:20;
  margin-right:40;
  /* width: 30px;
  height: 30px; */
  /* object-fit: contain; */
`;

const facebook = require("./facebook.png");

const FacebookButton = ({onPress}) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <View>
      {/* <Button> */}
        <ButtonBox
          onPress={onPress}
          highlight={highlight}
        >
          {/* <FBlogo> */}
            {/* <ImgCont> */}
              <FacebookImg source={facebook} />
            {/* </ImgCont> */}
            {/* <Buttontext> */}
              <Text>Sign in With Facebook</Text>
            {/* </Buttontext> */}
          {/* </FBlogo> */}
        </ButtonBox>
      {/* </Button> */}
    </View>
  );
};

FacebookButton.defaultProps = {
  onPress: () => {}
};

export default FacebookButton;
