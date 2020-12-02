import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import Loading from "../../components/Loading";
import Input from "../../comps/Input";
import Likes from "../../comps/Likes";
import TopBar from "../../comps/TopBar";
import AddImage from "../../comps/AddImage";
import Spacer from "../../comps/Spacer";
import Avatar06 from "../../comps/Avatar/Avatar06";
import Dislikes from "../../comps/Dislikes";
import Province from "../../comps/Province";
import { useUserState } from "../../hook/useUserState";
import { getDogProfile, createDogProfile, updateDogProfileByProfileId, updateUser } from "../../db/DBUtils";
import { validate } from "../../helpers/tools"
import { getGeocode } from "../../helpers/api";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";


const Main = styled.View`
  width: 375px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* align-items: center; */
`;
const MainCont = styled.ScrollView`
  width: 100%;
  padding-bottom:100px;
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

const OwnerEditProfile = ({route, navigation}) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogBio, setDogBio] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [likes, setLikes] = useState(null);
  const [dislikes, setDislikes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userState, dispatchUser] = useUserState();

  // const defaultProfilePc = require("");
  const handleLikes = (likes) =>{
    setLikes(likes);
  }
  const handleDislikes = (dislikes) =>{
    setDislikes(dislikes);
  }
  
  const handleImageUpload = (avatarUrl)=> {
    if(avatarUrl) setAvatarUrl(avatarUrl);
  } 

  const handleProvinceSelected = ( province) => {
    setProvince(province);
  }

  const handleSubmit = async () => {
    const keyArr = ["dogName", "dogAge", "dogBreed","city", "province", "zip","phone"]
    const dataArr =  [dogName, dogAge, dogBreed, city, province, zip, phone]
    const validated = validate(dataArr);

    validated.forEach((element, index) => {
      if(!element) 
        Alert.alert("Error", `The ${keyArr[index]} can not be empty`)
    })
    
    const newProfile = {
      owner: userState.user.uid,
      name:dogName,
      age: dogAge,
      breed: dogBreed,
      avatarUrl,
      dogBio,
      phone,
      province,
      city,
      address,
      postalCode:zip,
      likes,
      dislikes,
      createdAt:new Date(),
    }
    
    if(route.params.newUser)
    {
      const profileId = await createDogProfile(newProfile);
      if((profileId) && (await(updateUser(userState.user.uid, {type:"dog owner", profileId: profileId})))){
        dispatchUser(
          {
            type:"dog owner",
            profile:newProfile,
          })
        handleUserLocationUpdate(profileId);
        navigation.navigate("Owner");
      }
    } else {
      if(await updateDogProfileByProfileId(userState.user && userState.user.profileId, newProfile)) {
        alert("updated saved");
        navigation.goBack();
      }
    }
  }

  const handleUserLocationUpdate = async (profileId) =>{
    const addr = {
      address,
      city,
      province,
      zip
    };
      
    const geoLocation = await getGeocode(addr);
    if(geoLocation && await(updateDogProfileByProfileId(profileId, {coords:geoLocation}))) {
     
      let newProfile = {...userState.user.profile};
      console.log(newProfile)
      newProfile.coords = geoLocation;
      dispatchUser(
        {
          profile: newProfile,
        }
      )
    }
  }

  const handleCancel = () => {
    navigation.goBack();
  }

  useEffect(() => {
    const fetchData = async(profileId)=> {
      let profile;
      if(userState.user.profile) {
        profile= userState.user.profile
      } else {
        profile = await getDogProfile(profileId);
      }

      if(profile) {
        setAvatarUrl(profile.avatarUrl);
        setDogName(profile.name);
        setDogAge(profile.age);
        setDogBreed(profile.breed);
        setDogBio(profile.bio);
        setAddress(profile.address);
        setCity(profile.city);
        setProvince(profile.province);
        setZip(profile.postalCode);
        setPhone(profile.phone);
        setLikes(profile.likes);
        setDislikes(profile.dislikes);
      }
    }
    fetchData(userState.user.profileId);
    setIsLoading(false);
  }, [])

  return isLoading? 
    (
      <Loading />
    ) 
    : (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      {/* <Main> */}
        <MainCont>
          <TopBar title="Edit Profile" textLeft="Cancel" textRight="Done" onPressLeft={handleCancel} onPressRight={handleSubmit} />
          <Cont>
            <Top>
              <Avatar06 avatarUrl={avatarUrl} isVisitor={userState.user.type} handleImageUpload={handleImageUpload}/>
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
                value={dogAge.toString()}
                onChangeText={(text) => {
                  if(text) {
                    try{
                      const newAge = parseInt(text);
                      setDogAge(newAge);
                    } catch {
                      alert("The age can only be number");
                    }
                  }
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
                  height="60px"
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
                
                <Province text="Province" province={province} handleProvinceSelected={handleProvinceSelected} />
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
          </Cont>
          
        </MainCont>
        
      {/* </Main> */}
    </KeyboardAvoidingView>
  );
};

export default OwnerEditProfile;
