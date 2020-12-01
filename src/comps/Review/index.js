import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";



const Star5 = styled.View``;

const Star4 = styled.View``;

const Star3 = styled.View``;

const Star2 = styled.View``;

const Star1 = styled.View``;

const Starscontainer = styled.View`
  width: 130px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  /* margin-left: 20px; */
  /* margin-top: 10px; */
  /* padding-top: 88px; */
`;

const StarImg = styled.Image`
  width: 13px;
  height: 13px;
  /* object-fit: contain; */
`;

const Startext = styled.Text`
  padding-left: 5px;
  color:#999;
  font-size:12px;
`;
const Reviewtext = styled.Text`
  padding-left: 5px;
  /* color:#111; */
  font-size:13px;
`;

const unfilled = require("./unfilled.png");
const filled = require("./filled.png");

const Review = ({date, text}) => {
  return (
    <View>
      <Starscontainer>
        <Star1>
          <StarImg source={filled} />
        </Star1>
        <Star2>
          <StarImg source={filled} />
        </Star2>
        <Star3>
          <StarImg source={filled} />
        </Star3>
        <Star4>
          <StarImg source={filled} />
        </Star4>
        <Star5>
          <StarImg source={unfilled} />
        </Star5>
        <Startext>
          <Text>{date}</Text>
        </Startext>
      </Starscontainer>
        <Reviewtext>
          <Text>{text}</Text>
        </Reviewtext>
    </View>
  );
};


Review.defaultProps = {
    date: "November 3, 2020",
    text: "I was happy with his manners. He loved my dog",
  };
  
export default Review;
