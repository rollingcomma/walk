import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BasicButton from "../WButton/BasicButton"

const EventCont = styled.View`
  /* align-items:center; */
  justify-content:center;
  display: flex;
 
`;


const Buttonbox = styled.TouchableOpacity`
  background: ${(props) => (props.highlight ? "#959494" : "#53B7BE")};
  border-radius: 4px;
  width: 107px;
  padding: 10px;
  margin-top: 8px;
  margin-left: 30px;
`;

const Buttontext = styled.Text` 
  color: #fff;
font-size:16px;
  margin-left:5px;
`;

const Details = styled.Text`
  display: flex;
  /* justify-content: left; */
  /* align-items: left; */
  font-size:13;
  margin-top: 5px;
  margin-bottom: 5px;
  flex-direction: column;
`;

const styles = StyleSheet.create({ 
  details: {
    // alignItems:"left"
  },
  // buttontext: {
  // color:
  // }
});

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
  display: flex;
  justify-content:center;
  align-items:center;
  margin-left: 5px;

  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
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
  padding-top: 5px;
  font-size:13px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size:18px;
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
  const [highlight, setHighlight] = useState(false);

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
          <Details style={styles.details}>
            <Text>{time}</Text>
            <Text>{detail1}</Text>
            <Text>{detail2}</Text>
          </Details>
          {/* <BasicButton
          text="Interested"  
          backgroundColor= "#38BC64" 
          height={27}
          width={107}
          size={16}
          /> */}
          <Buttonbox
            onPress={() => {
              setHighlight(!highlight);
            }}
            highlight={highlight}
          >
            <Buttontext>
              <Text  style={styles.buttontext}>{highlight ? text : "Going"}</Text>
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
