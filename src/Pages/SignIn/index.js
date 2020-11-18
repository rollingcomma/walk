import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Title from "../../comps/Title";
import GoogleButton from "../../comps/GoogleButton";
import Or from "../../comps/Or";
import FacebookButton from "../../comps/FacebookButton";

const OrCont = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LoginCont = styled.View`
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const TitleCont = styled.View`
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
`;

const MainCont = styled.View`
  width: 100%;
  height: 812px;
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

const SignIn = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Cont>
            <TitleCont>
              <Title />
            </TitleCont>

            <LoginCont>
              <GoogleButton />
              <OrCont>
                <Or />
              </OrCont>
              <FacebookButton />
            </LoginCont>
          </Cont>
        </MainCont>
      </Main>
    </View>
  );
};

export default SignIn;
