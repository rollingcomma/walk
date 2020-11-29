import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Loading from "../../components/Loading";
import Dropdown from "../../comps/Dropdown";
import Input from "../../comps/Input";
import Birthday from "../../comps/Birthday";
import Spacer from "../../comps/Spacer";
//mport FooterBar from "../../comps/FooterBar";
import Province from "../../comps/Province";
import BasicButton from "../../comps/WButton/BasicButton";

const Main = styled.View`
  /* width: 375px;
  height: 812px; */
  /* background-color: red; */
  height:100%;
  

`;

const Cont = styled.View`
align-items: center;
  /* width: 100%; */
  /* height: 50%; */
  
  /* flex-direction: column; */
  /* align-items: center; */
`;



const TitleText = styled.Text`
  font-size: 24px;
  color: #53b7be;
  margin-top: 50px;
`;

const InputCont = styled.View`
`;

const styles = StyleSheet.create({ 
  country: {
    marginTop:30,
    // justifyContent:"center",
    // alignItems:"center",
    // backgroundColor:"red",
    // height:"100%"
  },
  InputCont: {
    marginTop:30,
  },
  Province: {
    marginTop:30
  },
  zip: {
    marginTop:30,
  },
  zipinput: {
    width:50,
  },
  birth: {
    marginTop:30,
  },
  spacer: {
    marginTop:50,
    marginBottom:20,
    // width:"100%"
    // height:10,
  }, 
  emergencyname: {
    marginTop:30,
  },
  emergencyphone: {
    marginTop:30,

  },
  button: {
    marginTop:50,
    marginBottom:50
  }
});

const TitleText2 = styled.Text`
  font-size: 24px;
  color: #53b7be;
  margin-top: 30px;
`;





const WalkerAuthentication = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [walkerzip, setWalkerZip] = useState("");
  const [emname, emSetName] = useState("");
  const [emphone, emSetPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return isLoading? 
    (
      <Loading />
    ) 
    :  
    (
      <Main>
        {/* <MainCont> */}
        <ScrollView>
          <Cont>
            <TitleText>Dog Walker Application</TitleText>
            
            <InputCont  style={styles.InputCont}>
              <Text>Phone</Text>
              <Input
                height={37}
                width={275}
                onChangeText={(t) => {
                  // alert(t);
                  phone(setPhone);
                }}
                />
              <Text>Email</Text>
              <Input
                height={37}
                width={275}
                onChangeText={(t) => {
                  // alert(t);
                  email(setEmail);
                }}
              />
            </InputCont>

              <View style={styles.country}>
                <Dropdown />
              </View>

              <View style={styles.Province}>
                <Province text="Province" />
              </View>

              <View style={styles.zip}>
                <Text>Zip Code</Text>
              <Input  style={styles.zipinput}
                height={37}
                width={275}
                onChangeText={(t) => {
                  // alert(t);
                  walkerzip(setWalkerZip);
                }}></Input>


              <View style={styles.birth}>
              <Birthday />
              </View>


              </View>
              </Cont>
              <View  style={styles.spacer}>
            <Spacer />
            </View>
            <Cont>
              <TitleText2>Emergency Contact</TitleText2>
              
              <View style={styles.emergencyname}>
              <Text>Name</Text>
              <Input
              height={37}
                width={275}
                onChangeText={(t) => {
                  // alert(t);
                  emname(emSetName);
                }}
                />
              </View>


             

              <View style={styles.emergencyphone}>
              <Text>Phone</Text>
              <Input
              height={37}
              width={275}
              onChangeText={(t) => {
                // alert(t);
                emphone(emSetPhone);
              }}
              />
              </View>

              <View style={styles.button}>
              <BasicButton 
              text="Continue" 
              height={44} 
              width={275}
              backgroundColor="#53B7BE" />
              </View>



              
           

            
          </Cont>
          </ScrollView>
         
            {/* <FooterBar /> */}
         
        {/* </MainCont> */}
      </Main>
  );
};

export default WalkerAuthentication;
