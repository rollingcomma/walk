import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Description from "../../comps/Description";
import Dropdown from "../../comps/Dropdown";
import Input from "../../comps/Input";
import Likes from "../../comps/Likes";
import Popup from "../../comps/Popup";
import Texting from "../../comps/Texting";
import Post from "../../comps/Post";
import WalkerProfile from "../../comps/WalkerProfile";
import MsgSent from "../../comps/MsgSent";
import MsgSelection from "../../comps/MsgSelection";
import Birthday from "../../comps/Birthday";
import MsgRecieved from "../../comps/MsgRecieved";
import DashDog from "../../comps/DashDog";
import DashOwner from "../../comps/DashOwner";
import AddImage from "../../comps/AddImage";
import Spacer from "../../comps/Spacer";
import TopBar from "../../comps/TopBar";
import AvatarWithName from "../../comps/Avatar/AvatarWithName";
import AvatarEdit from "../../comps/Avatar/AvatarEdit";
// import FooterBar from "../../comps/FooterBar";
import Avatar06 from "../../comps/Avatar/Avatar06";
import Dislikes from "../../comps/Dislikes";
import Province from "../../comps/Province";

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* align-items: center; */
`;
const MainCont = styled.View`
  width: 100%;
  height: 812px;
`;
const FooterCont = styled.View`
  width: 375px;
  position: absolute;
  bottom: 0;
`;
const Cont = styled.View`
  width: 100%;
  height: 86%;
  /* background-color: blue; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.View`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #dad; */
`;
const BasicInfo = styled.View`
  width: 100%;
  height: 150px;
  /* background-color: #aad; */
  align-items: center;
`;
const TitleText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-left: 46px;
  margin-top: 10px;
`;
const TitleText2 = styled.Text`
  color: #565555;
  font-size: 12px;
  margin-left: 46px;
  margin-top: 10px;
`;
const DogInfo = styled.View`
  width: 100%;
  height: 395px;
  /* background-color: #dba; */
`;
const InputCont = styled.View`
  width: 100%;
  height: 350px;
  /* background-color: #bba; */
  align-items: center;
  margin-top: 10px;
  z-index: 2;
`;
const InputCont2 = styled.View`
  width: 100%;
  height: 350px;
  /* background-color: #acb; */
  align-items: center;
  margin-top: 10px;
  justify-content: space-evenly;
`;
const LikesCont = styled.View`
  width: 92%;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  /* background-color: #baa; */
`;
const PersonalInfo = styled.View`
  width: 100%;
  height: 380px;
  /* background-color: #baa; */
`;
const PostCont = styled.View`
  width: 100%;
  /* background-color: #ada; */
  height: 240px;
`;
const AddCont = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;
const OwnerEditProfile = () => {
  const [dogname, setDogName] = useState("");
  const [dogage, setDogAge] = useState("");
  const [dogbreed, setDogBreed] = useState("");
  const [dogemail, setDogEmail] = useState("");
  const [dogphone, setDogPhone] = useState("");
  const [dogadress, setDogAdress] = useState("");
  const [dogzip, setDogZip] = useState("");
  return (
    <View>
      <Main>
        <MainCont>
          <TopBar title="Edit Profile" text1="Cancel" text2="Done" />
          <Cont>
            <Top>
              <Avatar06 />
            </Top>
            <Spacer />
            <BasicInfo>
              <Input
                text="Name"
                onChangeText={(t) => {
                  alert(t);
                  setDogName(dogname);
                }}
              />
              <Input
                text="Age"
                onChangeText={(t) => {
                  alert(t);
                  setDogAge(dogage);
                }}
              />
              <Input
                text="Breed"
                onChangeText={(t) => {
                  alert(t);
                  setDogBreed(dogbreed);
                }}
              />
            </BasicInfo>
            <Spacer />
            <DogInfo>
              <TitleText>Dog Information</TitleText>
              <InputCont>
                <Input
                  text="Bio"
                  height="48px"
                  onChangeText={(t) => {
                    alert(t);
                    setDogBreed(dogbreed);
                  }}
                />
                <LikesCont>
                  <Likes />
                  <Dislikes />
                </LikesCont>
              </InputCont>
            </DogInfo>
            <Spacer />
            <PersonalInfo>
              <TitleText>Personal Information</TitleText>
              <InputCont2>
                <Input
                  text="Email"
                  onChangeText={(t) => {
                    alert(t);
                    setDogEmail(dogemail);
                  }}
                />
                <Input
                  text="Phone"
                  onChangeText={(t) => {
                    alert(t);
                    setDogPhone(dogphone);
                  }}
                />
                <Province text="Province" />
                <Input
                  text="Adress"
                  onChangeText={(t) => {
                    alert(t);
                    setDogAdress(dogadress);
                  }}
                />
                <Input
                  text="Zip Code"
                  onChangeText={(t) => {
                    alert(t);
                    setDogZip(dogzip);
                  }}
                />
              </InputCont2>
            </PersonalInfo>
            <Spacer />
            <PostCont>
              <TitleText>Posts</TitleText>
              <TitleText2>Add pup pics here!</TitleText2>
              <AddCont>
                <AddImage />
              </AddCont>
            </PostCont>
          </Cont>
          {/* <FooterCont>
            <FooterBar />
          </FooterCont> */}
        </MainCont>
      </Main>
    </View>
  );
};

export default OwnerEditProfile;
