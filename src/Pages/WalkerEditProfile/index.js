import React, {useEffect, useState} from "react";
import { ScrollView, View, Text, KeyboardAvoidingView, Platform, Alert } from "react-native";
import styled from "styled-components/native";
import Loading from "../../components/Loading";
import Input from "../../comps/Input";
import Province from "../../comps/Province";
import Spacer from "../../comps/Spacer";
import TopBar from "../../comps/TopBar";

import { useUserState } from "../../hook/useUserState";
import { createUser, createWalkerProfile, getWalkerProfile, updateUser, updateWalkerProfile } from "../../db/DBUtils";

import Birthday from "../../components/Birthday";
import Avatar06 from "../../comps/Avatar/Avatar06";
import { validate } from "../../helpers/tools"
import { getGeocode } from "../../helpers/api";

const Main = styled.View`
  /* width:375px; */
  /* height:812px; */
  /* display:flex;
  flex-direction:column; */
  /* background-color:red; */
  /* align-items:center; */
`;
const MainCont = styled.View`
  width:100%; 
  height:100%;
  margin-top:20px;
  padding-bottom:100px;
`;
const FooterCont = styled.View`
  width:375px;
  position:absolute;
  bottom:0;
`;
const Cont = styled.View`
  /* width:100%; */
  /*height:100%;*/
  /* background-color:blue; */
  /* overflow-y:scroll; */
  /* display:flex;
  flex-direction:column;
  align-items:center; */
`;
const Top = styled.View`
  /* width:100%; */
  height:160px;
  /* background-color:#DBD; */
  /* display:flex;
  flex-direction:column;*/
  justify-content:center;
`;
const PersonalInfo = styled.View`
  /* width:100%; */
  height:150px;
  /* background-color:#CCA; */
  /* z-index:5; */
  /* display:flex; */
  margin-top:10px;
`;
const BasicInfo = styled.View`
  /* width:100%; */
  /* height:400px; */
  flex:1;
  display:flex;
  flex-direction:column;
  background-color:#FFF;
  align-items:center;
  justify-content:center;
`;
const HeaderText = styled.Text`
  font-weight: 500;
  font-size: 30px;
  margin-left:20px;
  margin-top:14px;
  /* background-color:#ACA; */
`;
const InputCont = styled.View`
  width:100%;
  height:202px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  /* background-color:#BBA; */
  margin-top:30px;
`;

const Bcont = styled.View`
  margin-top:24px;
`;
const EmergencyInfo = styled.View`
  /* width:100%; */
  height:200px;
  /* background-color:#ECA; */
  z-index:4;
  display:flex;
  margin-top:16px;
`;
const InputCont2 = styled.View`
  /* width:100%; */
  height:120px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  /* background-color:red; */
  margin-top:30px;
`;
const Scont = styled.View`
  margin-top:50px;
  background-color:#ACA;
`;
const WalkerEditProfile = ({route, navigation}) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [emName, setEmName] = useState("");
  const [emPhone, setEmPhone] = useState("");
  const [userState, dispatchUser] = useUserState();
  const [isLoading, setIsLoading] = useState(true);
  const {DateTime} = require("luxon");
  // const downarrowimg = require("../../../assets/downarrow.png");

  const handleSelected = (date) => {
    setBirthday(date);
  }

  const handleImageUpload = (avatarUrl)=> {
    if(avatarUrl) setAvatarUrl(avatarUrl);
  } 

  const handleProvinceSelected = ( province) => {
    setProvince(province);
  }

  const handleSubmit = async () => {
    const keyArr = ["name", "age", "city", "province", "zip","phone", "emergency person name", "emergency contact phone"]
    const dataArr =  [name, age, city, province, zip, phone, emName, emPhone]
    const validated = validate(dataArr);

    validated.forEach((element, index) => {
      if(!element) 
        Alert.alert("Error", `The ${keyArr[index]} can not be empty`)
    });

    const newProfile = {
      uid:userState.user.uid,
      name,
      age: age,
      avatarUrl,
      bio,
      phone,
      province,
      city,
      address,
      postalCode:zip,
      birthday,
      emergencyContactPerson:emName,
      emergencyContactTel:emPhone,
      createdAt:new Date(),
    }
    
    if(route.params.newUser)
    {
      if((await createWalkerProfile(newProfile)) && (await(updateUser(userState.user.uid, {type:"walker"})))){
        dispatchUser({
          type:"walker",
          profile:newProfile,
        })
        handleUserLocationUpdate(userState.user.uid);
        navigation.navigate("Walker");
      }
    } else {
      if(await updateWalkerProfile(userState.user.uid, newProfile)){
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
    if(geoLocation && await(updateWalkerProfile(profileId, {coords:geoLocation}))) {
      console.log(geoLocation.U);
      let newProfile = {...userState.user.profile};
      newProfile.coords = geoLocation;
      dispatchUser(
        {
          profile: newProfile,
        }
      )
    }
  }

  const handleCancel = () => {
    navigation.goBack()
  }

  useEffect(() => {
    const fetchData = async(profileId)=> {
      let profile;
      if(userState.user.profile) {
        profile= userState.user.profile
      } else {
        profile = await getWalkerProfile(profileId);
      }
     
      if(profile) {
        setAvatarUrl(profile.avatarUrl);
        setName(profile.name);
        setAge(profile.age);
        setAddress(profile.address);
        setCity(profile.city);
        setProvince(profile.province);
        setZip(profile.postalCode);
        setBio(profile.bio);
        setPhone(profile.phone);
        setEmName(profile.emergencyContactPerson);
        setEmPhone(profile.emergencyContactTel);
        setBirthday(profile.birthday.toDate());
      }
      
    };
    fetchData(userState.user.uid);
    setIsLoading(false);
    
  }, [])
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:() => (
        <Text onPress={()=> handleSubmit()} title="Done" />
      ),
      headerLeft:() => (
        <Text onPress={()=> handleCancel()} title="Cancel" />
      ),
    });
  }, [navigation, handleSubmit])


  
  return isLoading? 
    (
      <Loading />
    ) 
    : 
    (
    // <View>
    // <Main>
     <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}>
      <MainCont>
        <TopBar title="Edit Profile" textLeft="Cancel" textRight="Done" onPressLeft={handleCancel} onPressRight={handleSubmit} />
        <ScrollView>
        <Cont>
          <Top>
            <Avatar06 avatarUrl={avatarUrl} handleImageUpload={handleImageUpload}/>
          </Top>
          <Spacer />
          <BasicInfo>
            <Input 
              text="Name"
              value={name}
              height= "37px"
              onChangeText={(t)=>{
                  setName();
            }}/>
            <Input 
              text="Age" 
              value={age.toString()}
              height= "37px"
              onChangeText={(t)=>{
                if(t)
                {
                  try{
                    const newAge = parseInt(t);
                    setAge(newAge);
                  } catch {
                    alert("The age can only be number");
                  }
                }
                  
            }}/>
            <Input 
              text="Address"
              value={address}
              height= "37px"
              onChangeText={(t)=>{
                  setAddress(t);
            }}/>
            <Input 
              text="City"
              value={city}
              height= "37px"
              onChangeText={(t)=>{
               
                  setCity(t);
            }}/>
            <Province text="Province" province={province} handleProvinceSelected={handleProvinceSelected} />
            <Input 
              text="Postal Code" 
              value={zip}
              height= "37px"
              onChangeText={(t)=>{
                  setZip(t);
            }}/>
            <Input 
              text="Bio" 
              value={bio}
              height="60px"
              multiline={true}
              onChangeText={(t)=>{
                  setBio(t);
            }}/>
          </BasicInfo>
          <Spacer />
          <PersonalInfo>
            <HeaderText>Personal Information</HeaderText>
            <InputCont>
              <Input 
                text="Phone"
                value={phone}
                height= "37px"
                onChangeText={(t)=>{
                    setPhone(t);
              }}/>
              <Bcont>
                {/* <CusDateTimePicker mode="date" /> */}
                <Birthday
                  text="Birthday"
                  defaultDate={birthday}
                  value= {birthday && DateTime.fromJSDate(birthday).toLocaleString(DateTime.DATE_MED)}
                  handleSelected={handleSelected}
                />
              </Bcont>
            </InputCont>
          </PersonalInfo>
          <Scont>
            <Spacer />
          </Scont>
            <EmergencyInfo>
              <HeaderText>Emergency Contact Information</HeaderText>
                <InputCont2>
                  <Input 
                    text="Name"
                    value={emName}
                    height= "37px"
                    onChangeText={(t)=>{
                        setEmName(t);
                      }}/>
                  <Input 
                    text="Phone"
                    value={emPhone}
                    height= "37px"
                    onChangeText={(t)=>{
                        setEmPhone(t);
                  }}/>
                  </InputCont2>
              </EmergencyInfo>
          </Cont>
          </ScrollView>
     </MainCont>
     </KeyboardAvoidingView>
    //   </Main>
    // </View>
  );
};

export default WalkerEditProfile;