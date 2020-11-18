import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const PopupCont = styled.View`
  width: 324px;
  height: 254px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border:1px solid grey;
  border-radius: 8px;
 
`;

const Exit = styled.View`
  display: flex;
  width: 100%;
  height: 15%;
  /* background-color: #dad; */
  align-items: flex-end;
  justify-content: center;
`;

const ImgBox = styled.View`
  width: 17px;
  height: 16px;
  margin-right:10px;
  /* background-color: blue; */
`;

const TextDisplay = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
  /* background-color: #bed; */
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  /* background-color:#ABC; */
`;

const InputsCont = styled.View`
  width: 85%;
  height: 45px;
  /* background-color:red; */
  display: flex;
  flex-direction: row;
`;

const TextInput = styled.View`
  flex: 5;
  height: 45px;
  /* background-color:#BED; */
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid lightgrey;
  border-radius:12px;
`;

const ImgInput = styled.View`
  flex: 1;
  height: 44px;
`;
const Close = styled.Image`
width:100%;
height:100%;
`;

const InputT = styled.TextInput`
  width:100%;
  height:100%;
`;

const Popup = ({}) => {
  return (
    <View>
      <PopupCont>
        <Exit>
          <ImgBox>
          <Close source={require=("./close.png")} />
          </ImgBox>
        </Exit>
        <TextDisplay>Send a Message</TextDisplay>
        <Inputs>
          <InputsCont>
            <TextInput>
              <InputT placeholder="Type a Message..." />
            </TextInput>
            <ImgInput>
                <Close source={require=("./nextarrow.png")} />
            </ImgInput>
          </InputsCont>
        </Inputs>
      </PopupCont>
    </View>
  );
};

Popup.defaultProps = {};

export default Popup;
