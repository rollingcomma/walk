import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Title from "../../comps/Title";
import ContinueAs from "../../comps/ContinueAs";
import DogOwnerButton from "../../comps/WButton/DogOwnerButton";

const WalkerButtonCont = styled.View`
  /* background-color: red; */
`;

const OwnerButtonCont = styled.View`
  /* background-color: red; */
  margin-bottom: 20px;
`;

const ButtonCont = styled.View`
  flex-direction: column;
`;

const LogoCont = styled.View`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ContinueAsCont = styled.View`
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

const Continue = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Cont>
            <LogoCont>
              <Title />
            </LogoCont>
            <ContinueAsCont>
              <ContinueAs />
            </ContinueAsCont>
            <ButtonCont>
              <OwnerButtonCont>
                <DogOwnerButton />
              </OwnerButtonCont>
              <WalkerButtonCont>
                <DogOwnerButton
                // text="Dog Walker"
                // backgroundColor="#53B7BE"
                // width={242}
                // height={55}
                // size={18}
                />
              </WalkerButtonCont>
            </ButtonCont>
          </Cont>
        </MainCont>
      </Main>
    </View>
  );
};

export default Continue;
