import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import Input from "../../comps/Input";
import Likes from "../../comps/Likes";
import AddImage from "../../comps/AddImage";
import Spacer from "../../comps/Spacer";
import Avatar06 from "../../comps/Avatar/Avatar06";
import Dislikes from "../../comps/Dislikes";
import Province from "../../comps/Province";
import { useUserState } from "../../hook/useUserState";

const Main = styled.View`
  width: 375px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* align-items: center; */
`;
const MainCont = styled.ScrollView`
  width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:150px;
`;
const Top = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #dad; */
`;
const BasicInfo = styled.View`
  width: 100%;
  align-items: center;
  align-content:space-between;
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
  height:380px;
`;
const InputCont = styled.View`
  width: 100%;
  /* background-color: #bba; */
  align-items: center;
  height:200px;
  z-index: 2;
  margin-top:14px;
  align-content:space-between;
`;
const InputCont2 = styled.View`
  width: 100%;
  /* background-color: #acb; */
  align-items: center;
  margin-top: 10px;
  justify-content: space-evenly;
`;
const LikesCont = styled.View`
  width: 92%;
  height:300px;
  justify-content: space-evenly;

`;
const PersonalInfo = styled.View`
  width: 100%;
  margin-top:10px;
`;
const PostCont = styled.View`
  width: 100%;
  /* background-color: #ada; */
`;
const AddCont = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const OwnerEditProfile = () => {
  const [userState, dispatchUser] = useUserState();
  const profile = userState && userState.user.profile? userState.user.Profile:null;
  const [dogName, setDogName] = useState(profile && profile.name ||"");
  const [dogAge, setDogAge] = useState(profile && profile.age || "");
  const [dogBreed, setDogBreed] = useState(profile && profile.breed || "");
  const [dogBio, setDogBio] = userState(profile && profile.bio || "");
  const [phone, setPhone] = useState(profile && profile.phone ||"");
  const [address, setAddress] = useState(profile && profile.address ||"");
  const [city, setCity] = useState(profile && profile.city||"");
  const [province, setProvince] = useState(profile && profile.province||"");
  const [zip, setZip] = useState(profile && profile.postalCode || "");
  const [likes, setLikes] = useState(profile && profile.likes || null);
  const [dislikes, setDislikes] = useState(profile && profile.dislikes || null);
  
  const handleLikes = (likes) =>{
    setLikes(likes);
  }
  const handleDislikes = (dislikes) =>{
    setDislikes(dislikes);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <Main>
        <MainCont>
         
          <Cont>
           
            <Top>
              <Avatar06 />
            </Top>
            <Spacer />
            <BasicInfo>
              <Input
                text="Name"
                height="35px"
                value= {dogName}
                onChangeText={(text) => {
                  setDogName(text);
                }}
               
              />
              <Input
                text="Age"
                height="35px"
                value={dogAge}
                onChangeText={(text) => {
                  setDogAge(text);
                }}
               />
              <Input
                text="Breed"
                height="35px"
                value={dogBreed}
                onChangeText={(text) => {
                  setDogBreed(text);
                }}
              />
            </BasicInfo>
            <Spacer />
            <DogInfo>
              <TitleText><Text>Dog Information</Text></TitleText>
              <InputCont>
                <Input
                  text="Bio"
                  height="48px"
                  value={dogBio}
                  onChangeText={(text) => {
                    setDogBio(text);
                  }}
                   multiline={true}
                />
                <LikesCont>
                  <Likes 
                    maintext="Likes"
                    likes={likes}
                    handleLikes={handleLikes}
                  />
                  <Dislikes 
                    maintext="Dislikes"
                    likes={dislikes}
                    handleDislikes={handleDislikes}
                  />
                </LikesCont>
              </InputCont>
            </DogInfo>
            <Spacer />
            <PersonalInfo>
              <TitleText><Text>Personal Information</Text></TitleText>
              <InputCont2>
              <Input
                  text="Phone" height="35px"
                  value={phone}
                  onChangeText={(text) => {
                    setPhone(text);
                  }}
                />
                <Input
                  text="address"
                  height="35px"
                  value={address}
                  onChangeText={(text) => {
                    // alert(t);
                    setAddress(text);
                  }}
                />
                <Input
                  text="city"
                  height="35px"
                  value={city}
                  onChangeText={(text) => {
                    setCity(text);
                  }}
                />
                <Province text="Province" />
                <Input
                  text="Zip Code"
                  height="35px"
                  value={zip}
                  onChangeText={(text) => {
                    // alert(t);
                    setZip(text);
                  }}
                />
              </InputCont2>
            </PersonalInfo>
            
            <Spacer />
            {/* // <PostCont>
            //   <TitleText><Text>Posts</Text></TitleText>
            //   <TitleText2><Text>Add pup pics here!</Text></TitleText2>
            //   <AddCont>
            //     <AddImage />
            //   </AddCont>
            // </PostCont> */}
          </Cont>
          
        </MainCont>
        
      </Main>
    </KeyboardAvoidingView>
  );
};

export default OwnerEditProfile;
