import React, { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import styled from "styled-components/native";

import Input from "../../comps/Input";
import BasicButton from "../../comps/WButton/BasicButton";
import EventTime from "../../comps/EventTime";

import Loading from "../../components/Loading";
import CusModal from "../../components/CusModal";
import ImageUpload from "../../components/ImageUpload";
import { validate } from "../../helpers/tools";
import { createEvent } from "../../db/DBUtils";
import { useUserState} from "../../hook/useUserState";
import { useNavigation } from "@react-navigation/native";

const Main = styled.View`
  display: flex;
  flex-direction: column;
  padding-bottom:100px;
`;
const Cont = styled.View`
  height: 100%;

`;
const InputCont = styled.View`
  height: 360px;
  align-items: center;
  justify-content: center;
  
`;
const Upload = styled.View`
  width: 100%;
  height: 150px;
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
const Preview =styled.Image `
  /*max-width:200px; */
  height:140px;
`
const ImgCont = styled.TouchableOpacity`
  height: 70%;
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

const AddEvent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("")
  const [location, setLocation] = useState("");
  const [detail, setDetail] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [uploadShow, setUploadShow] = useState(false);
  const [userState] = useUserState()
  const navigation = useNavigation();

  const handleImageUpload = (pictureUrl)=> {
    if(pictureUrl) setPictureUrl(pictureUrl);
  } 

  const handleModalClose = () => {
    setUploadShow(false);
  }

  const handleStartTime = (time) => {
    setStartTime(time)
  }

  const handleEndTime = (time) => {
    setEndTime(time)
  }

  const handleSubmit = async () => {
    const keyArr = ["name", "date","location","startTime", "detail", "pictureUrl"]
    const dataArr =  [name, date, location, startTime, detail, pictureUrl]
    const validated = validate(dataArr);

    validated.forEach((element, index) => {
      if(!element) 
        Alert.alert("Error", `The ${keyArr[index]} can not be empty`)
    })
    
    const newEvent = {
      organizer: userState.user.uid,
      name,
      date, 
      address:location, 
      startTime,
      endTime,
      participants:[],
      details:[detail],
      pictureUrl,
      createdAt: new Date(),
    }
    
    if(await createEvent(newEvent)) {
      Alert.alert("Great", "You just create a new event!")
      navigation.goBack();
    }
  }

  return (
       <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}>
      <Main>
          <ScrollView>

          <Cont>
            <InputCont>
              <Input
                text="Title"
                height={37}
                width={200}
                onChangeText={(t) => {
                  setName(t)
                }}
              />
              <Input
                text="Date"
                height={37}
                width={200}
                onChangeText={(t) => {
                  
                  setDate(t)
                  
                }}
              />
              <Input
                text="Location"
                height={37}
                width={200}
                onChangeText={(t) => {
                  setLocation(t)
                }}
              />
              <Input
                text="Detail"
                height={37}
                width={200}
                onChangeText={(t) => {
                  setDetail(t)
                }}
              />
              <EventTime handleStartTime={handleStartTime} handleEndTime={handleEndTime} />
            </InputCont>

            <Upload>
              <UpTitle>
                <TitleText><Text>Upload Photo</Text></TitleText>
              </UpTitle>
              <ImgCont
                onPress={() => {
                  setUploadShow(true);
                }}
              >
                {
                  pictureUrl?
                    <Preview source ={{uri:pictureUrl}} />
                  :
                    <Image source={addimage} />
                }
               
                
              </ImgCont>
            </Upload>

        <ButtonCont>
        <BasicButton 
          text="Add Event"  
          backgroundColor= "#53B7BE" 
          height={46}
          width={137}
          size={16}
          onPress={handleSubmit}
        />
        </ButtonCont>
          </Cont>
          
      </ScrollView>
        <CusModal 
          title="Upload an event picture" 
          handleModalClose={handleModalClose} 
          modalVisible={uploadShow}>
          <ImageUpload handleModalClose={handleModalClose} uploadImageOnly handleUrlChange={handleImageUpload} folder="eventImages" />
        </CusModal>
      </Main>
      </KeyboardAvoidingView>
  );
};

export default AddEvent;