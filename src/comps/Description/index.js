import React from "react";
import styled from "styled-components/native";
import { View, StyleSheet, shadowOpacity, shadowRadius} from "react-native";

const MainCont = styled.View`
  width: 288px;
  height: 103px;
  background-color: #ffffff;
  border-radius: 3px;
`;
const Input1 = styled.TextInput`
  width:100%;
  height:103px;
  padding: 12px 20px;
`;

const styles = StyleSheet.create({ 
  shadow: {
    shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
  },
});

const Description = ({}) => {
  return (
    <View>
      <MainCont style={styles.shadow}>
        <Input1 multiline placeholder="Type at least 5 words"/>
      </MainCont>
    </View>
  );
};

Description.defaultProps = {};
export default Description;
