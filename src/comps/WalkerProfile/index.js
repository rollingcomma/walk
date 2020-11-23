import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import UserInfo from "../UserInfo";
import Avatar07 from '../../comps/Avatar/Avatar07';
import ReviewStars from "../ReviewStars";

import global from "../../Pages/globaj";

const MainCont = styled.View`
  width:353px;
  height:196px;
  background-color: #FFFFFF;
  border-radius: 26px;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  border:.5px solid lightgrey;
`;

const LeftCont = styled.View`
  flex:1;
  /* background-color:#DDA; */
  display:flex;
  flex-direction:column;
  align-items:flex-end;
`;

const Location = styled.View`
  flex:1;
  /* background-color:red; */
  width:70%;
  margin-top:10px;
  display:flex;
  flex-direction:row;
  align-items:center;
`;
const RegText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  padding-left:8px;
`;
const TitleText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
`;
const Age = styled.View`
  flex:1;
  width:70%;
  /* background-color:#CCA; */
  display:flex;
  flex-direction:row;
  align-items:center;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
`;
const Bio = styled.View`
  flex:3;
  width:70%;
  /* background-color:#DCC; */
  display:flex;
  flex-direction:row;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
`;
const BioCont = styled.View`
  width:100px;
`;
const ViewProfile = styled.View`
  flex:1;
  width:70%;
  /* background-color:blue; */
  display:flex;
  justify-content:flex-end;
  align-items:center;
  flex-direction:row;
`;
const ViewText = styled.Text`
font-style: normal;
font-weight: normal;
font-size: 8px;
color: #565555;
`;
const ImgCont = styled.View`
  width:8px;
  height:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  /* background-color:red; */ 
`;
const RightCont = styled.View`
  flex:1;
  /* background-color:#ADA; */
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Cont = styled.View`
  height:158px;
  width:148px;
  /* background-color:#CBA; */
  display:flex;
  flex-direction:column;
  align-items:center;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  color: #000000;
`;
const ProfImgCont = styled.View`
  width:85px;
  height:85px;
  /* background-color:blue; */
`;
const ProfileImage = styled.Image`
  width:100%;
  height:100%;
  border-radius:44px;
`;
const Name = styled.View`
  /* background-color:red; */
  width:80%;
  height:20px;
  margin-top:10px;
  align-items:center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;
const Rating = styled.View`
  width:100%;
  height:20px;
`;
const OtherText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
`;
const Img = styled.Image`
  width:100%;
  height:100%;
`;
const rightimg = require("./right.png");
const walkerpicture = require("./selfie.jpg");


const styles = StyleSheet.create({ 
  box: {
    width:353,
    height:196,
    backgroundColor:"red",
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    alignItems:"center",
    justifyContent:"space-between",
    shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 5,
  },
  container: {
    width:"80%",
    flexDirection:"row",
    justifyContent:"center",
  },
  rightcont: {
    marginTop:20,
    height:150,
    justifyContent:"center",
    // justifyContent:"space-between",
  },
  text: {
    marginLeft:20,
    fontWeight:"bold",
    marginBottom:10
  }
});


const WalkerProfile = ({city, age, bio, name}) => {
  return (
    <View>
      <Text style={styles.text}>Walker Profile</Text>
    <View style={styles.box}>
        <View style={styles.container}>
          <View>
            <UserInfo/>
            <Text 
              style={styles.extratext}
              style={{fontSize:10, marginTop:10}}>View full profile</Text>
          </View>

          <View style={styles.rightcont}>
          <Avatar07
              image1={require('../../comps/Avatar/face3.jpg')}/>
          <ReviewStars/>
          </View>
        </View>
        </View>
        
    </View>
    // <View >
    //   <MainCont style={global.bg}>
    //     <LeftCont>
    //       <Location><TitleText>Location</TitleText><RegText>{city}</RegText></Location>
    //       <Age><TitleText>Age</TitleText><RegText>{age}</RegText></Age>
    //       <Bio><TitleText>Bio</TitleText><BioCont><RegText>{bio}</RegText></BioCont></Bio>
    //       <ViewProfile><ViewText>View full profile</ViewText><ImgCont><Img source={rightimg} /></ImgCont></ViewProfile>
    //     </LeftCont>
    //     <RightCont>
    //       <Cont>
    //         <ProfImgCont><ProfileImage source={walkerpicture} /></ProfImgCont>
    //         <Name><Text>{name}</Text></Name>
    //         <OtherText>Certified Walker</OtherText>
    //         <Rating></Rating>
    //       </Cont>
    //     </RightCont>
    //   </MainCont>
    // </View>
  );
};

// WalkerProfile.defaultProps = {
//   city: "Burnaby, BC",
//   age: "23",
//   bio:
//     "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
//   name: "Ethan P",
//   pic: "selfie.jpg"
// };

export default WalkerProfile;
