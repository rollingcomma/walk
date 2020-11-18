import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Startext = styled.Text`
  padding-left: 5px;
`;

const Star5 = styled.View``;

const Star4 = styled.View``;

const Star3 = styled.View``;

const Star2 = styled.View``;

const Star1 = styled.View``;

const Starscontainer = styled.View`
  width: 124px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  /* margin-left: 20px; */
  /* margin-top: 10px; */
  /* padding-top: 88px; */
`;

const StarImg = styled.Image`
  width: 20px;
  height: 20px;
  /* object-fit: contain; */
`;

const unfilled = require("./unfilled.png");
const filled = require("./filled.png");

const ReviewStars = () => {
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
          <Text>(30)</Text>
        </Startext>
      </Starscontainer>
    </View>
  );
};

export default ReviewStars;
