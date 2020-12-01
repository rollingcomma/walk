import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useUserState } from "../../hook/useUserState";
import { updateEvent } from "../../db/DBUtils";

const EventCont = styled.View`
  /* align-items:center; 
  justify-content:center;
  display: flex;*/
 
`;
const ButtonBox = styled.TouchableOpacity`
  background: ${(props) => (props.isInterested ? "#959494" : "#53B7BE")};
  border-radius: 4px;
  width: 140px;
  height:30px;
  margin-top: 8px;
  align-items:center;
  justify-content:center;
`;

const ButtonText = styled.Text` 
  color: #fff;
  font-size:16px;
  
`;

const Details = styled.View`
  display: flex;
  /* justify-content: left; */
  /* align-items: left; */
  /* font-size:13px; */
  margin-top: 10px;
  margin-bottom: 5px;
  flex-direction: column;
`;

const AttendCont = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: left; */
  /* align-items: left; */
  /* padding: 5px; */
`;

const Paw = styled.View`
  width: 30px;
  height: 30px;
  /* display: flex; */
  /* justify-content:center; */
  /* align-items:center; */
  margin-left: 5px;
`;

const PawImg = styled.Image`
  width: 30px;
  height: 30px;
  /* font-weight: 700; */
`;

const Number = styled.Text`
  /* justify-content: left; */
  /* align-items: left; */
  font-weight: bold;
  font-size:18px;
`;

const Subhead = styled.Text`
  color: #53b7be;
  margin:5px 0;
  font-size:13px;
  font-weight:bold;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size:18px;
  width:150px;
`;

const ImageCont = styled.View``;

const EventImg = styled.Image`
  /* width: 199px;
  height: 200px; */
`;

const Column = styled.View`
  /* align-items: left; */
`;

const paw = require("./paw.png");

const EventInfo = ({
  id,
  event,
}) => {
  const [eventState, setEventState] = useState(event)
  const [isInterested, setIsInterested] = useState(false);
  const [userState] = useUserState();

  const handleGoingClick = () => {
    const newEvent = {...eventState}
    if(isInterested) {
      newEvent.participants = newEvent.participants.filter(p => p !==  userState.user.uid);
    } else {
      newEvent.participants.push(userState.user.uid);
    }
    if(updateEvent(id, newEvent)) {
      setEventState(newEvent)
      setIsInterested(!isInterested);
    }
  }

  useEffect(() => {
    if(eventState.participants.includes(userState.user.uid))
      setIsInterested(true);
  },[]
  )

  return (
    <View>
      <EventCont>
        <ImageCont>
          <EventImg source={{uri: eventState.pictureUrl}} />
        </ImageCont>
        <Column>
          <Title>
            <Text>{eventState.name}</Text>
          </Title>
          <Subhead>
            <Text>{eventState.date}</Text>
          </Subhead>
          <AttendCont>
            <Number>
              <Text>{eventState.participants.length}</Text>
            </Number>
            <Paw>
              <PawImg source={paw} />
            </Paw>
          </AttendCont>
          <Details >
            <Text>{`${eventState.startTime} - ${eventState.endTime}`}</Text>
            <Text>{eventState.details[0]}</Text>
            <Text>{eventState.details[1]}</Text>
          </Details>
          <ButtonBox
            onPress={() => {
              handleGoingClick();
            }}
            isInterested={isInterested}
          >
            <ButtonText>
              <Text>{isInterested ? "Interested" : "Going"}</Text>
            </ButtonText>
          </ButtonBox>
        </Column>
      </EventCont>
    </View>
  );
};

export default EventInfo;

EventInfo.defaultProps = {
  text: "Interested",
  onPress: () => {},
  title: null,
  date: null,
  number: null,
  time: null,
  detail1: null,
  detail2: null,
  img: null
};
