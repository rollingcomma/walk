import React, {useEffect, useState} from "react";
import { ScrollView, View, Text, KeyboardAvoidingView, Platform, Alert } from "react-native";
import styled from "styled-components/native";
import Loading from "../../components/Loading";
import Input from "../../comps/Input";
import Province from "../../comps/Province";
import Spacer from "../../comps/Spacer";
import TopBar from "../../comps/TopBar";
import AvatarEdit from "../../comps/Avatar/AvatarEdit";
import { useUserState } from "../../hook/useUserState";
import { getWalkerProfile } from "../../db/DBUtils";

import Birthday from "../../components/Birthday";
import Avatar06 from "../../comps/Avatar/Avatar06";
import CusModal from "../../components/CusModal";
import CusDateTimePicker from "../../components/CusDateTimePicker";
import { validate } from "../../helpers/tools"

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
const WalkerEditProfile = ({navigation}) => {
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

  const handleSubmit = () => {
    const keyArr = ["name", "age", "city", "province", "zip","phone", "emergency person name", "emergency contact phone"]
    const dataArr =  [name, age, city, province, zip, phone, emName, emPhone]
    const validated = validate(dataArr);
    validate.forEach((element, index) => {
      if(!element) 
        Alert.alert("Error", `The ${keyArr[index]} can not be empty`)
    })
    alert("submit");
  }

  const handleCancel = () => {
    alert("Cancel");
  }

  useEffect(() => {
    const fetchData = async(profileId)=> {
      const profile = await getWalkerProfile(profileId);
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
    }
    if(userState.user.type) {
      fetchData(userState.user.uid);
    }
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
            <Avatar06 avatarUrl={avatarUrl} isVisitor={!userState.user.type} handleImageUpload={handleImageUpload}/>
          </Top>
          <Spacer />
          <BasicInfo>
            <Input 
              text="Name"
              value={name}
              height= "37px"
              onChangeText={(t)=>{
                // alert(t)
                if(t)
                  setName(name);
            }}/>
            <Input 
              text="Age" 
              value={age.toString()}
              height= "37px"
              onChangeText={(t)=>{
                if(t)
                  setAge(age);
            }}/>
            <Input 
              text="Address"
              value={address}
              height= "37px"
              onChangeText={(t)=>{
                // alert(t)
                if(t)
                  setAddress(t);
            }}/>
            <Input 
              text="City"
              value={city}
              height= "37px"
              onChangeText={(t)=>{
                if(t)
                  seCity(t);
            }}/>
            <Province text="Province" province={province} handleProvinceSelected={handleProvinceSelected} />
            <Input 
              text="Postal Code" 
              value={zip}
              height= "37px"
              onChangeText={(t)=>{
                // alert(t)
                if(t)
                  setZip(t);
            }}/>
            <Input 
              text="Bio" 
              value={bio}
              height="60px"
              multiline={true}
              onChangeText={(t)=>{
                // alert(t)
                if(t)
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
                  // alert(t)
                  if(t)
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
                      // alert(t)
                      if(t)
                        setEmName(t);
                      }}/>
                  <Input 
                    text="Phone"
                    value={emPhone}
                    height= "37px"
                    onChangeText={(t)=>{
                    // alert(t)
                      if(t)
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