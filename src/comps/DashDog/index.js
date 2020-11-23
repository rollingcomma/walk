import React from "react";
import styled from "styled-components/native";
import {View, Text} from "react-native";

const MainCont = styled.View`
  width:166px;
  height:266px;
  display:flex;
  flex-direction:column;
  /* margin:30px 30px; */
  /* background-color:#BBD; */
`;
const TitleCont = styled.View`
  width:100%;
  height:23px;
`;
const TitleText = styled.Text`
  font-size:16px;
  font-weight:bold;
`;
const InfoCont = styled.View`
  width:100%;
  height:243px;
  /* background-color:#DBD; */
  display:flex;
  flex-direction:column;
  border-radius: 10px;
  border:1px solid #d9d9d9;
`;
const TopInfo = styled.View`
  flex:3;
  /* background-color:#CBD; */
  justify-content:center;
`;
const TopCont = styled.View`
  width:100%;
  height:50px;
  /* background-color:#BBD; */
  display:flex;
  flex-direction:row;
`;
const ProfPicCont = styled.View`
  flex:3;
  /* background-color:#ABC; */
  display:flex;
  align-items:center;
  justify-content:center;
`;
const ImgCont = styled.View`
  width:49px;
  height:49px;
  /* background-color:#BAC; */
`;
const Img = styled.Image`
  width:100%;
  height:100%;
  border-radius:24px;
`;
const ProfTextCont = styled.View`
  flex:4;
  /* background-color:#BAC; */
  display:flex;
  flex-direction:column;
`;
const Name = styled.View`
  flex:1;
  /* background-color:#DAC; */
`;
const ViewProfile = styled.View`
  flex:1;
  /* background-color:#AAC; */
  display:flex;
  flex-direction:row;
`;
const PText = styled.View`
  font-size:8px;
  color: #53B7BE;
`;
const ArrowCont = styled.View`
    width:10px;
    height:10px;
    margin-left:4px;
`;
const Arrow = styled.Image`
  width:100%;
  height:100%;
`;
const BottomInfo = styled.View`
  flex:4;
  /* background-color:#DCC; */
  display:flex;
  align-items:center;
  justify-content:flex-start;
`;
const BottomCont = styled.View`
  /* background-color:#DAC; */
  width:80%;
  height:60%;
  display:flex;
  flex-direction:column;
`;
const AgeCont = styled.View`
  flex:1;
  /* background-color:#BBB; */
  width:100%;
  display:flex;
  flex-direction:row;
`;
const BreedCont = styled.View`
  flex:1;
  /* background-color:#AAA; */
  width:100%;
  display:flex;
  flex-direction:row;
`;
const LikesCont = styled.View`
  flex:1;
  /* background-color:#CCC; */
  width:100%;
  display:flex;
  flex-direction:row;
`;
const Title = styled.View`
  height:100%;
  flex:2;
  /* background-color:#CCC; */
  display:flex;
  align-items:center;
  justify-content:center;
`;
const TitleText2 = styled.View`
  font-weight:bold;
  font-size: 10px;
`;
const Info = styled.View`
  height:100%;
  flex:5;
  /* background-color:#CAC; */
  align-items:flex-start;
  justify-content:center;
  padding-left:4px;
`;
const InfoText = styled.View`
  font-weight: normal;
  font-size: 10px;
  color: #565555;
`;

const dogpicture = require("./Lucky.png");
const rightarrow = require("./right.png");

const DashDog = ({dogname, age, breed, likes}) => {
  return (
    <View>
      <MainCont>
        <TitleCont><TitleText>Dog Profile</TitleText></TitleCont>
        <InfoCont>
          <TopInfo>
            <TopCont>
              <ProfPicCont>
                <ImgCont><Img source={dogpicture}/></ImgCont>
              </ProfPicCont>
              <ProfTextCont>
                <Name><Text>{dogname}</Text></Name>
                <ViewProfile><PText><Text>View full profile</Text></PText><ArrowCont><Arrow source={rightarrow}/></ArrowCont></ViewProfile>
              </ProfTextCont>
            </TopCont>
          </TopInfo>
          <BottomInfo>
            <BottomCont>
              <AgeCont>
                <Title><TitleText2><Text>Age</Text></TitleText2></Title>
                <Info><InfoText><Text>{age}</Text></InfoText></Info>
              </AgeCont>
              <BreedCont>
                <Title><TitleText2><Text>Breed</Text></TitleText2></Title>
                <Info><InfoText><Text>{breed}</Text></InfoText></Info>
              </BreedCont>
              <LikesCont>
                <Title><TitleText2><Text>Likes</Text></TitleText2></Title>
              </LikesCont>
            </BottomCont>
          </BottomInfo>
        </InfoCont>
      </MainCont>
    </View>
  );
};

DashDog.defaultProps = {
  picture:"Lucky.png",
  dogname:"Lucky",
  age:"6",
  breed:"Golden Retriever",
  likes:"Swimming"
};
export default DashDog;
