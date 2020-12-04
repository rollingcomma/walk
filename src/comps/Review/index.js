import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const {DateTime} = require("luxon");

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

const Review = ({review}) => {
  console.log(typeof review.value.stars)
  return (
    <View style={{padding:10, marginLeft:20, marginRight:20, borderTopColor:"lightgrey", borderWidth:1}}>
      <Starscontainer style={{padding:10}}>
        <Star1>
          <StarImg source={(review.value.stars >= 1)? filled:unfilled} />
        </Star1>
        <Star2>
          <StarImg source={(review.value.stars >= 2)? filled:unfilled} />
        </Star2>
        <Star3>
          <StarImg source={(review.value.stars >= 3)?filled:unfilled} />
        </Star3>
        <Star4>
          <StarImg source={(review.value.stars >= 4)? filled:unfilled} />
        </Star4>
        <Star5>
          <StarImg source={(review.value.stars = 5)? filled:unfilled} />
        </Star5>
        <Startext>
        </Startext>
      </Starscontainer>
        <Reviewtext>
          <Text>{review.value.review}</Text>
        </Reviewtext>
    </View>
  );
};


Review.defaultProps = {
    date: "November 3, 2020",
    text: "I was happy with his manners. He loved my dog",
  };
  
export default Review;
