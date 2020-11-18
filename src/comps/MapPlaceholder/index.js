import React from "react";
import styled from "styled-components/native";
import { View, Text, Dimensions } from "react-native";

const Placeholder = styled.View`
  display: flex;
  width: ${Dimensions.get('window').width};
  height: ${(Dimensions.get('window').width)/2};
  padding: 10px;
  border: 1px solid #565555;
  border-radius: 19px;
  display: flex;
`;

const MapPlaceholder = ({children}) => {
  return (
    <Placeholder>{children}</Placeholder>
   
  );

};

export default MapPlaceholder;
