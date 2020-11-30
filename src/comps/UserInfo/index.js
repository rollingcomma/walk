import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const TextCont = styled.View`
  display: flex;
  /* margin-left: auto;
  margin-right: auto; */
  /* margin-left: 20px; */
  padding-top: 20px;
  width:150px;
`;

const LocationTitle = styled.Text`
  font-weight: 500;
`;

const Locationtext = styled.Text`
  font-weight: 400;
  padding-left: 10px;
`;

const LocationCont = styled.Text`
  flex-direction: row;
  padding-bottom: 10px;
`;

const AgeTitle = styled.Text`
  font-weight: 500;
`;

const Agetext = styled.Text`
  font-weight: 400;
  padding-left: 10px;
`;

const AgeCont = styled.Text`
  flex-direction: row;
  padding-bottom: 10px;
`;

const BioTitle = styled.Text`
  font-weight: 500;
`;

const Biotext = styled.Text`
  font-weight: 400;
  padding-left: 10px;
  color: #565555;
`;

const BioCont = styled.Text`
  flex-direction: row;
  width: 150px;

`;

const UserInfo = ({profile}) => {
  return (
    <View>
      <TextCont>
        <LocationCont>
          <LocationTitle>
            <Text style={{fontWeight:"bold"}}>Location: </Text>
          </LocationTitle>
          <Locationtext>
            <Text style={{fontSize:12}}>{profile.city}, {profile.province}</Text>
          </Locationtext>
        </LocationCont>

        <AgeCont>
          <AgeTitle>
            <Text style={{fontWeight:"bold"}}>Age: </Text>
          </AgeTitle>
          <Agetext>
            <Text style={{fontSize:12}}>{profile.age}</Text>
          </Agetext>
        </AgeCont>

        <BioCont>
          <BioTitle>
            <Text style={{fontWeight:"bold"}}>Bio: </Text>
          </BioTitle>
          <Biotext>
            <Text style={{fontSize:10}}>
              {profile.bio}
            </Text>
          </Biotext>
        </BioCont>
      </TextCont>
    </View>
  );
};

export default UserInfo;
