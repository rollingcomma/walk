import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import BasicButton from '../WButton/BasicButton';
import { useNavigation } from "@react-navigation/native";

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
`;

const Main = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 320px;
  justify-content: space-between;
  /* margin-left: auto;
  margin-right: auto; */
`;

const Reviewcontainer = styled.View`
  flex-direction: column;
  display: flex;
  /* bottom: -300px; */
`;

const Reviewtext = styled.Text`
  margin-bottom: 10px;
  font-size:18;
  font-weight:bold;
`;

const StarImg = styled.Image`
  width: 20px;
  height: 20px;
`;

const filled = require("./filled.png");
const unfilled = require("./unfilled.png");

const WriteReview = ({isVisitor, profile}) => {
  //const [highlight, setHighlight] = useState(true);
  const navigation = useNavigation();
  const handleReviewButtonClick = () => {
    navigation.navigate("LeaveReview", {profile: profile})
  }
  return (
    <View>
      <Main>
        <Reviewcontainer>
          <Reviewtext>
            <Text>Reviews</Text>
          </Reviewtext>
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
        </Reviewcontainer>

        { isVisitor && <BasicButton
        text="Write a Review"  
        backgroundColor= "#565555"
        onPress={handleReviewButtonClick}
        height={45}
        width={137}
          />}
      </Main>
    </View>
  );
};

// WriteReview.defaultProps = {
//   onPress: () => {}
// };

export default WriteReview; 
