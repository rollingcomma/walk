import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components/native";

import Input from "../../comps/Input";
//import TopBar from "../../comps/TopBar";
//import FooterBar from "../../comps/FooterBar";
import BasicButton from "../../comps/WButton/BasicButton";
import EventTime from "../../comps/EventTime";


const Main = styled.View`
  display: flex;
  flex-direction: column;
  height:100%;
`;
const Cont = styled.View`
  height: 100%;

`;
const InputCont = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;
  
`;
const Upload = styled.View`
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;
`;
const UpTitle = styled.View`
  /* width: 100%; */
  /* height: 20px; */
  /* background-color:#dad; */
`;
const TitleText = styled.Text``;
const Image = styled.Image`
  width: 50px;
  height: 50px;
`;
const ImgCont = styled.View`
  height: 90%;
  justify-content: center;
`;
const ButtonCont = styled.View`
  /* height: 90%; */
  justify-content: center;
  align-items:center;
  margin-top:20px;
  margin-bottom:20px;
`;

const addimage = require("./addphoto.png");
//const addimage = require("../../comps/TopBar/addphoto.png");

const AddEvent = () => {
  const [eventAdress, setEventAdress] = useState("");
  const [eventCity, setEventCity] = useState("");
 
  
  return (
      <Main>
        {/* <MainCont> */}
          {/* <TopBar
            title="Create an Event"
            imageLeft1={left}

          /> */}
          <ScrollView>

          <Cont>
            <InputCont>
              <Input
                text="Title"
                height={37}
                width={200}
                onChangeText={(t) => {
                  alert(t);
                  eventAdress(setEventAdress);
                }}
              />
              
              <Input
                text="Date"
                height={37}
                width={200}
                onChangeText={(t) => {
                  alert(t);
                  eventCity(setEventCity);
                }}
              />
              <Input
                text="Location"
                height={37}
                width={200}
                onChangeText={(t) => {
                  alert(t);
                  eventCity(setEventCity);
                }}
              />
              <Input
                text="Detail"
                height={37}
                width={200}
                onChangeText={(t) => {
                  alert(t);
                  eventAdress(setEventAdress);
                }}
              />
              <EventTime />
            </InputCont>

            <Upload>
              <UpTitle>
                <TitleText><Text>Upload Photo</Text></TitleText>
              </UpTitle>
              <ImgCont
                onPress={() => {
                  alert("Add 1 Photo from Camera Roll to fill Upload const");
                }}
              >
                <Image source={addimage} />
              </ImgCont>
            </Upload>

        <ButtonCont>
        <BasicButton 
        text="Add Event"  
        backgroundColor= "#53B7BE" 
        height={46}
        width={137}
        size={16}
        />
        </ButtonCont>
          </Cont>
          
                </ScrollView>
            {/* <FooterBar /> */}
     
        {/* </MainCont> */}
      </Main>
  );
};

export default AddEvent;