import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const MainCont = styled.View`
  width: 170px;
  height: 266px;
  display: flex;
  flex-direction: column;
  /* margin:30px 30px; */
  /* background-color:#BBD; */
`;
const TitleCont = styled.View`
  width: 100%;
  height: 23px;
  /* background-color:#DBD; */
`;
const TitleText = styled.Text`
  font-size: 16px;
  font-weight:bold;
`;
const InfoCont = styled.View`
  width: 100%;
  height: 243px;
  /* background-color:#CCC; */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;
const TopInfo = styled.View`
  flex: 3;
  /* background-color:#CBD; */
  justify-content: center;
`;
const BottomInfo = styled.View`
  flex: 4;
  /* background-color:#DCC; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const TopCont = styled.View`
  width: 100%;
  height: 50px;
  /* background-color:#BBD; */
  display: flex;
  flex-direction: row;
`;
const ProfPicCont = styled.View`
  width: 49px;
  margin-left: 12px;
  /* background-color:#ABC; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgCont = styled.View`
  width: 49px;
  height: 49px;
  /* background-color:#BAC; */
`;
const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;
const BottomCont = styled.View`
  /* background-color:#DAC; */
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
const NameCont = styled.View`
  flex: 1;
  /* background-color:#BBB; */
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const PhoneCont = styled.View`
  flex: 1;
  /* background-color:#BBB; */
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const EmailCont = styled.View`
  flex: 1;
  /* background-color:#BBB; */
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const AdressCont = styled.View`
  flex: 1;
  /* background-color:#BBB; */
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const Title = styled.View`
  height: 100%;
  flex: 2;
  /* background-color:#CCC; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Info = styled.View`
  height: 100%;
  flex: 5;
  /* background-color:#CAC; */
  align-items: flex-start;
  justify-content: center;
  padding-left: 4px;
`;
const TitleText2 = styled.View`
  /* font-weight: Bold; */
  font-size: 10px;
`;
const InfoText = styled.View`
  font-weight: normal;
  font-size: 10px;
  color: #565555;
`;

const ownerpicture = require("./ethan.jpeg");
const DashOwner = ({ ownername, ownerphone, owneremail, owneradress }) => {
  return (
    <View>
      <MainCont>
        <TitleCont>
          <TitleText>Owner Profile</TitleText>
        </TitleCont>
        <InfoCont>
          <TopInfo>
            <TopCont>
              <ProfPicCont>
                <ImgCont>
                  <Img source={ownerpicture} />
                </ImgCont>
              </ProfPicCont>
            </TopCont>
          </TopInfo>
          <BottomInfo>
            <BottomCont>
              <NameCont>
                <Title>
                  <TitleText2><Text>Name</Text></TitleText2>
                </Title>
                <Info>
                  <InfoText><Text>{ownername}</Text></InfoText>
                </Info>
              </NameCont>
              <PhoneCont>
                <Title>
                  <TitleText2><Text>Phone</Text></TitleText2>
                </Title>
                <Info>
                  <InfoText><Text>{ownerphone}</Text></InfoText>
                </Info>
              </PhoneCont>
              <EmailCont>
                <Title>
                  <TitleText2><Text>Email</Text></TitleText2>
                </Title>
                <Info>
                  <InfoText><Text>{owneremail}</Text></InfoText>
                </Info>
              </EmailCont>
              <AdressCont>
                <Title>
                  <TitleText2><Text>Address</Text></TitleText2>
                </Title>
                <Info>
                  <InfoText><Text>{owneradress}</Text></InfoText>
                </Info>
              </AdressCont>
            </BottomCont>
          </BottomInfo>
        </InfoCont>
      </MainCont>
    </View>
  );
};

DashOwner.defaultProps = {
  picture: "ethan.jpeg",
  ownername: "Ethan",
  ownerphone: "604.435.3456",
  owneremail: "ian@mycomp.com",
  owneradress: "2020 Steel st."
};
export default DashOwner;
