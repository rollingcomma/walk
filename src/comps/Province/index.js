import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from "react-native";

const Component = styled.View`
  /* margin:30px 30px; */
  width: 273px;
  /* background-color:red; */
`;

const MainCont = styled.View`
  width: 273px;
  height: 62px;
  /* background-color:#DDB; */
  display: flex;
  justify-content: flex-end;
`;

const Cont = styled.View`
  width: 273px;
  height: 40px;
  /* background-color:#BDB; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 8px;
  padding-left: 8px;
  background-color: #ffffff;
  border: 1px solid lightgrey;
`;

const ImgCont = styled.TouchableOpacity`
  width: 15px;
  height: 8px;
  /* background-color:red; */
`;

const Options = styled.View`
  width: 273px;
  height: 220px;
  background-color: #bcd;
  display: ${(props) => (props.expand ? "none" : "inline-flex")};
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
const Province = ({ text, province }) => {
  const [expand, setExpand] = useState(true);
  const [tProvince, setProvince] = useState("");

  useEffect(() => {
    setProvince(province);
  }, [province]);

  return (
    <View>
      <Component>
        <MainCont>
          <Text>{text}</Text>
          <Cont>
            <Text>{tProvince}</Text>
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
            }}
          >
            <Text>British Columbia</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Alberta");
            }}
          >
            <Text>Alberta</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Saskatchewan");
            }}
          >
            <Text>Saskatchewan</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Manitoba");
            }}
          >
            <Text>Manitoba</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Ontario");
            }}
          >
            <Text>Ontario</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Quebec");
            }}
          >
            <Text>Quebec</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("NL & L");
            }}
          >
            <Text>NL & L</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("New Brunswick");
            }}
          >
            <Text>Ontario</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("PEI");
            }}
          >
            <Text>PEI</Text>
          </Country>
          <Country
            onPress={() => {
              setProvince("Nova Scotia");
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

export default Province;
