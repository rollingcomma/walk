import React from "react";
import styled from "styled-components/native";
import { View, Text} from "react-native";

const MainCont = styled.View`
  width:375px;
  height:415px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-top:30px;
`;
const Header = styled.View`
  width:375px;
  height:53px;
  /* background-color:#DBD; */
  display:flex;
  flex-direction:row;
`;
const ProfilePic = styled.View`
  flex:1;
  display:flex;
  align-items:center;
  /* background-color:#CBD; */
  justify-content:center;
`;

const ProfileName = styled.View`
  flex:5;
  /* background-color:#DBB; */
  display:flex;
  flex-direction:column;
  padding-left:8px;
  justify-content:space-evenly;
`;
const NameText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
`;
const ViewProfile = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #53B7BE;
`;
const Time = styled.Text`
  flex:1;
  /* background-color:#CCD; */
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #959494;
  display:flex;
  flex-direction:row;
  align-items:center;
`;
const Picture = styled.View`
  width:100%;
 height:328px;
 /* background-color:#BBD; */
`;
const Footer = styled.View`
  width:375px;
  height:34px;
  /* background-color:#DCB; */
  display:flex;
  flex-direction:row;
`;
const Icons = styled.View`
  flex:1;
  /* background-color:#ADD; */
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
`;
const Heart = styled.View`
  width:30px;
  height:30px;
  /* background-color:#ABD; */
`;
const Message = styled.View`
  width:30px;
  height:30px;
  /* background-color:#ABD; */
`;
const Distance = styled.Text`
  flex:3;
  /* background-color:#DDA; */
  display:flex;
  align-items:center;
  padding-left:8px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
`;
const ProfileImage = styled.Image`
  width:100%;
  height:100%;
  border-radius:20px;
`;
const ImgCont = styled.View`
  width:40px;
  height:40px;
  /* background-color:blue; */
  border-radius:20px;
`;
const IconPics = styled.Image`
  width:100%;
  height:100%;
`;
const DisplayPic = styled.Image`
  width:100%;
  height:100%;
`;
const messageimg = require("./message.png");
const likeimg = require("./like.png");
const profilepicture = require("./Lucky.png");
const display = require("./Lucky.png");
const Post = ({text, time, distance}) => {
  return (
    <View>
      <MainCont>
        <Header>
          <ProfilePic>
            <ImgCont>
              <ProfileImage source={profilepicture} />
            </ImgCont>
          </ProfilePic>
          <ProfileName>
              <NameText>{text}</NameText>
            <ViewProfile><Text>View Profile</Text></ViewProfile>
          </ProfileName>
          <Time><Text>{time}  hr ago</Text></Time>
        </Header>
        <Picture>
          <DisplayPic source={display} />
        </Picture>
        <Footer>
          <Icons>
            <Heart>
              <IconPics source={likeimg} />
            </Heart>
            <Message>
              <IconPics source={messageimg} />
            </Message>
            </Icons>
          <Distance>
            <Text>{distance} Km away</Text>
          </Distance>
        </Footer>
      </MainCont>
    </View>
  );
};

Post.defaultProps = {
  text:"Lucky",
  time:"2",
  picture:"Lucky.png",
  display:"Lucky.png",
  distance:"1"
};
export default Post;
