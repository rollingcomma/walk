import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const Reviewtext = styled.Text`
  font-weight: 700;
  color: #000;
  font-size:22;
`;

const Main = styled.View`
  display: flex;
  /* margin-left: 20px; */
`;

const Star1 = styled.TouchableOpacity`
  margin: 5px;
`;

const Starscontainer = styled.View`
  width: 124px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const StarImg = styled.Image`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
`;

const unfilled = require("./bigunfilled.png");
const filled = require("./bigfilled.png");
const YourReview = ({ numstar }) => {
  const [Stars, setStars] = useState(0);

  useEffect(() => {
    setStars(numstar);
  }, [numstar]);
  /*
  ()=> {}
  shortcut for a function
  */
  return (
    <View>
      <Main>
        <Reviewtext>
          <Text>Your Review</Text>
        </Reviewtext>
        <Starscontainer>
          <Star1
            onPress={() => {
              setStars(1);
            }}
          >
            <StarImg source={Stars !== 0 ? filled : unfilled} />
          </Star1>
          <Star1
            onPress={() => {
              setStars(2);
            }}
          >
            <StarImg source={Stars > 1 ? filled : unfilled} />
          </Star1>
          <Star1
            onPress={() => {
              setStars(3);
            }}
          >
            <StarImg source={Stars > 2 ? filled : unfilled} />
          </Star1>
          <Star1
            onPress={() => {
              setStars(4);
            }}
          >
            <StarImg source={Stars > 3 ? filled : unfilled} />
          </Star1>
          <Star1
            onPress={() => {
              setStars(5);
            }}
          >
            <StarImg source={Stars > 4 ? filled : unfilled} />
          </Star1>
        </Starscontainer>
      </Main>
    </View>
  );
};

Starscontainer.defaultProps = {
  onPress: () => {}
};

export default YourReview;
