import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import BasicButton from '../WButton/BasicButton';

// const Buttontext = styled.Text`
//   color: #fff;
//   align-items: center;
//   justify-content: center;
//   display: flex;
// `;

// const Buttoncontainer = styled.TouchableOpacity`
//   background: ${(props) => (props.highlight ? "#565555" : "#C4C4C4")};
//   width: 137px;
//   border-radius: 7px;
//   padding: 12px;
//   /* bottom: -300px; */
// `;

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

const WriteReview = () => {
  const [highlight, setHighlight] = useState(true);

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

        {/* <Buttoncontainer
          onPress={() => {
            setHighlight(!highlight);
          }}
          highlight={highlight}
        > */}
          <BasicButton
        text="Write a Review"  
        backgroundColor= "#565555" 
        height={45}
        width={137}
        />
          {/* <Buttontext>
            <Text>Write a Review</Text>
          </Buttontext> */}
        {/* </Buttoncontainer> */}
      </Main>
    </View>
  );
};

WriteReview.defaultProps = {
  onPress: () => {}
};

export default WriteReview; 
