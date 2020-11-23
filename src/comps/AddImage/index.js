import React from "react";
import styled from "styled-components/native";
import {View} from "react-native";

const MainCont = styled.View`
  width:271px;
  height:124px;
  /* background-color:white; */
  /* margin:30px 30px; */
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  align-content:space-between;
`;
const AddBox = styled.View`
  width:69px;
  height:55px;
  background-color: #C4C4C4;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 3px;
`;
const ImgCont = styled.View`
  width:19px;
  height:19px;
`;
const Img = styled.Image`
  width:100%;
  height:100%;
`;

const union = require("./Union.png");
const AddImage = ({}) => {
  return (
    <View>
      <MainCont>
        <AddBox><ImgCont><Img source={union} /></ImgCont></AddBox>
        <AddBox><ImgCont><Img source={union} /></ImgCont></AddBox>
        <AddBox><ImgCont><Img source={union} /></ImgCont></AddBox>
        <AddBox><ImgCont><Img source={union} /></ImgCont></AddBox>
        <AddBox><ImgCont><Img source={union} /></ImgCont></AddBox>
        <AddBox><ImgCont><Img source={union} /></ImgCont></AddBox>
      </MainCont>
    </View>
  );
};

AddImage.defaultProps = {

};

export default AddImage;
