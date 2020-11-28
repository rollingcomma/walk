import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet, onPress, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import  colors  from '../../styles/colors';
import BasicAvatar from "../Avatar/BasicAvatar";
import Popup from "../Popup"
import { DateDiff } from "../../helpers/tools"

const MainCont = styled.View`
  /* width:375px; */
  height:415px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-top:30px;
`;
const Header = styled.View`
  height:53px;
  flex-direction:row;
  align-items:center;
  margin-bottom:10px;
  margin-top:10px;
`;
const ProfilePic = styled.View`
  flex:1;
  display:flex;
  justify-content:center;
`;

const ProfileName = styled.View`
  flex:5;
  display:flex;
  flex-direction:column;
  padding-left:8px;
  height:40px;
`;
const NameText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
`;
const ViewProfile = styled.Text`
  font-size: 10px;
  color: #53B7BE;
`;
const Time = styled.Text`
  flex:1;
  font-size: 10px;
  color: #959494; 
`;
const Picture = styled.View`
  /* width:100%; */
  maxWidth: 100%;
  height:340px;
 /* background-color:#BBD; */
`;
const Footer = styled.View`
  height:34px;
  align-items:center;
  display:flex;
  flex-direction:row;
  margin-top:15px;
`;
const Icons = styled.View`
  flex:1;
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
`;
const Heart = styled.View`
  width:23px;
  height:23px;
  /* background-color:#ABD; */
`;
const Distance = styled.Text`
  flex:3;
  display:flex;
  padding-left:8px;
  font-weight: bold;
  font-size: 15px;
`;
const ProfileImage = styled.Image`
  width:100%;
  height:100%;
  border-radius:20px;
`;
const ImgCont = styled.View`
  /* width:40px;
  height:40px;
  border-radius:20px; */
`;
const IconPics = styled.Image`
  width:23px;
  height:23px;
`;
const DisplayPic = styled.Image`
  width:100%;
  height:100%;
`;
const messageimg = require("./message.png");
const likeimg = require("./like.png");

const Post = ({
  post,
  distance}) => {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(!modalVisible);
  }
  return (
    <View>
      <MainCont>
        <Header>
          <ProfilePic>
            <ImgCont>
              <BasicAvatar
                image1={{uri: post.avatarUrl}}
                width={40}
                height={40}
              />
              </ImgCont>
          </ProfilePic>
          <ProfileName>
            <NameText><Text>{post.name}</Text></NameText>
            <ViewProfile onPress={() => navigation.navigate("DogProfileRequest", {profileId: post.dogId})}>View Profile</ViewProfile>
          </ProfileName>
          
          <Time><Text>HRs ago</Text></Time>
           {/* TODO {DateDiff(Date.now() - post.createdAt)}  */}
        </Header>
        
        <Picture>
          <DisplayPic source={{uri: post.picsUrl}} />
        </Picture>

        <Footer>
          <Icons>
            <Heart>
              <IconPics source={likeimg} />
            </Heart>
            <TouchableOpacity onPress={() => {
                console.log("open modal clicked"); 
                setModalVisible(true)}}>
              <IconPics 
              source={messageimg} >

              </IconPics>
              </TouchableOpacity>
          </Icons>
          <Distance>
            <Text>{distance} Km away</Text>
          </Distance>
        </Footer>
      </MainCont>
      <Popup modalVisible={ modalVisible } handleModalClose={handleModalClose} />
    </View>
  );
};

// Post.defaultProps = {
//   text:"Lucky",
//   time:"2",
//   picture:"Lucky.png",
//   display:"Lucky.png",
//   distance:"1",
//   onPress: () => {},
// };


export default Post;
