import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const EventCont = styled.View`
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  /* margin-left: 20px; */
  /* margin-top: 20px; */
`;

const Buttontext = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Buttonbox = styled.TouchableOpacity`
  background: ${(props) => (props.highlight ? "#959494" : "#53B7BE")};
  border-radius: 4px;
  width: 107px;
  padding: 10px;
  display: flex;
  align-items: right;
  justify-content: right;
  margin-top: 8px;
`;

const Details = styled.Text`
  display: flex;
  justify-content: left;
  align-items: left;
  font-weight: 400;
  padding: 5px;
  flex-direction: column;
`;

const AttendCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  padding: 5px;
`;

const Paw = styled.View`
  width: 20px;
  height: 20px;
  display: flex;
  margin-left: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Number = styled.Text`
  justify-content: left;
  align-items: left;
  font-weight: 500;
`;

const Subhead = styled.Text`
  color: #53b7be;
  font-weight: 400;
  padding-top: 5px;
`;

const Title = styled.Text`
  font-weight: 700;
`;

const PawImg = styled.Image`
  width: 20px;
  height: 20px;
  font-weight: 700;
`;

const ImageCont = styled.View``;

const EventImg = styled.Image`
  width: 199px;
  height: 200px;
`;

const Column = styled.View`
  align-items: left;
`;

const paw = require("./paw.png");
const derbyreach = require("./derby-reach.png");
const queenelizabeth = require("./queen-elizabeth.png");
const rockypoint = require("./rocky-point.png");

const EventInfo = ({
  text,
  title,
  date,
  number,
  time,
  detail1,
  detail2,
  img
}) => {
  const [highlight, setHighlight] = useState(true);

  return (
    <View>
      <EventCont>
        <ImageCont>
          <EventImg source={img} />
        </ImageCont>
        <Column>
          <Title>
            <Text>{title}</Text>
          </Title>
          <Subhead>
            <Text>{date}</Text>
          </Subhead>
          <AttendCont>
            <Number>
              <Text>{number}</Text>
            </Number>
            <Paw>
              <PawImg source={paw} />
            </Paw>
          </AttendCont>
          <Details>
            <Text>{time}</Text>
            <Text>{detail1}</Text>
            <Text>{detail2}</Text>
          </Details>
          <Buttonbox
            onPress={() => {
              setHighlight(!highlight);
            }}
            highlight={highlight}
          >
            <Buttontext>
              <Text>{highlight ? text : "Going"}</Text>
            </Buttontext>
          </Buttonbox>
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
