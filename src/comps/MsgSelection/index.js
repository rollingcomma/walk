import React, {useState} from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const MainCont = styled.View`
  width:100%;
  height:60px;
  /* background-color:#BDB; */
  align-items:center;
  display:flex;
  flex-direction:row;
  /* cursor: pointer; */
`;

const Left = styled.View`
  flex:1;
  height:30px;
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  align-items:center;
`;

const LeftBar = styled.View`
width:100%;
height:2px;
background-color:${props=>props.general ? "black" : "#d6d6d6"};
`;

const Right = styled.View`
  flex:1;
  height:30px;
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  align-items:center;
  font-weight:${props=>props.general ? "normal" : "bold"};
`;

const RightBar = styled.View`
width:100%;
height:2px;
background-color:${props=>props.general ? "#d6d6d6" : "black"};
`;
const TextLeft = styled.Text`
    font-weight:${props=>props.general ? "bold" : "normal"};
`;
const TextRight = styled.Text`
    font-weight:${props=>props.general ? "normal" : "bold"};
`;

const MsgSelection = ({}) => {
  const [general, setGeneral] = useState(false)
  return (
    <View>
      <MainCont onClick={()=>{
        setGeneral(!general);
      }}>
       <Left>
         <TextLeft  general={general}>General</TextLeft>
         <LeftBar general={general}></LeftBar>
       </Left>
       <Right>
       <TextRight  general={general}>Walk Requests</TextRight>
         <RightBar general={general}></RightBar>
       </Right>
      </MainCont>
    </View>
  );
};
MsgSelection.defaultProps = {};
export default MsgSelection;
