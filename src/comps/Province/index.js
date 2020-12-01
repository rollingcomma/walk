import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image, StyleSheet } from "react-native";

const Component = styled.View`
  /* margin:30px 30px; */
  width: 300px;
  /* background-color:red; */
`;

const MainCont = styled.View`
  width: 300px;
  height: 30px;
  /* background-color:#DDB; */
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
`;

const Cont = styled.View`
  width: 194px;
  height: 27px;
  /* background-color:#BDB; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: #ffffff;
  border: 1px solid  #DDD;
`;
const InputTitle = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#CBD; */
  font-size:30px;
`;

const ImgCont = styled.TouchableOpacity`
  width: 15px;
  height: 8px;
  /* background-color:red; */
`;

const Options = styled.View`
  width: 194px;
  margin-start:100px;
  height: 220px;
  background-color: #bcd;
  display: ${(props) => (props.expand ? "none" : "flex")};
  flex-direction: column;
`;

const Country = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  padding-left: 4px;
`;

const Arrow = styled.Image`
  width: 100%;
  height: 100%;
`;
const downarrowimg = require("./downarrow.png");
const Province = ({ text, province, handleProvinceSelected }) => {
  const [expand, setExpand] = useState(true);
  const [tProvince, setProvince] = useState("");
  const [initialProvince, setInitialProvince] = useState("");
  
  useEffect(() => {
    if(province) setInitialProvince(province);
  }, [province]);

  useEffect(() => {
    handleProvinceSelected(tProvince);
  }, [tProvince]);

  
  return (
    <View>
      <Component>
        <MainCont>
          <InputTitle>
          
          <Text style={styles.text}>{text}</Text>
          </InputTitle>
          <Cont>
            <Text>{tProvince || initialProvince}</Text>
            <ImgCont
              onPress={() => {
                setExpand(!expand);
              }}
            >
              <Arrow source={downarrowimg} />
            </ImgCont>
          </Cont>
        </MainCont>
        <Options expand={expand}>
          <Country
            onPress={() => {
              setProvince("British Columbia");
              setExpand(!expand);
            }}
          >
            <Text>British Columbia</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Alberta");
              setExpand(!expand);
            }}
          >
            <Text>Alberta</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Saskatchewan");
              setExpand(!expand);
            }}
          >
            <Text>Saskatchewan</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Manitoba");
              setExpand(!expand);
            }}
          >
            <Text>Manitoba</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Ontario");
              setExpand(!expand);
            }}
          >
            <Text>Ontario</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Quebec");
              setExpand(!expand);
            }}
          >
            <Text>Quebec</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("NL & L");
              setExpand(!expand);
            }}
          >
            <Text>NL & L</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("New Brunswick");
              setExpand(!expand);
            }}
          >
            <Text>New Brunswick</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("PEI");
              setExpand(!expand);
            }}
          >
            <Text>PEI</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Nova Scotia");
              setExpand(!expand);
            }}
          >
            <Text>Nova Scotia</Text>
          </Country>
        </Options>
      </Component>
    </View>
  );
};

Province.defaultProps = {
  text: "Country",
  country: "",
  tCountry: ""
};

const styles = StyleSheet.create({ 
  text: {
    fontSize:13,
    fontWeight:"bold"
  },
});
export default Province;
