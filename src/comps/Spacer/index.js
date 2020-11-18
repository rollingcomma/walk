import React from "react";
import styled from "styled-components/native";
import { View} from "react-native";

const MainCont = styled.View`
  /* width:267px; */
  height:0px;
  
`;
const Spacerr = styled.View`
  width:100%;
  height:0px;
  border: 1px solid #e0e0e0;
`;

const Spacer = ({}) => {
  return (
    <View>
      <MainCont>
        <Spacerr />
      </MainCont>
    </View>
  );
};

Spacer.defaultProps = {};
export default Spacer;
