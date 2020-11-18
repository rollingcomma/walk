import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const Main = styled.View``;

const TitleImg = styled.Image`
  width: 276px;
  height: 70px;
  display: flex;

  /* margin-top: 20px; */

`;

const title = require("./textlogo.png");

const Title = () => {
  return (
    <View>
      <Main>
        <TitleImg source={title} />
      </Main>
    </View>
  );
};

export default Title;
