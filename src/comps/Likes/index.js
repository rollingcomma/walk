import React, {useState} from "react";
import styled from "styled-components/native";
import { View, TextInput, Text, StyleSheet } from "react-native";

const MainCont = styled.View`
  /* background-color: #dbd; */
  width: 290px;
  height: 104px;
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.View`
  /* background-color: #bbd; */
  flex: 3;
  display: flex;
  align-items: center;
  padding: 4px;
`;
const RightSide = styled.View`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const OpOne = styled.View`
  width: 100%;
  height: 37px;
  border: 1px solid #e5e5e5;
  margin-bottom:5px;
`;
const Input1 = styled.TextInput`
  /* background-color:#FAD; */
  height:100%;
  /* color:"#dad" */
  
`

const styles = StyleSheet.create({ 
  text: {
    fontWeight:"bold",
    fontSize:13,
    marginTop:5
  },
});


const Likes = ({ maintext}) => {
  const [dislikeone, setDislikeOne] = useState("");
  const [disliketwo, setDislikeTwo] = useState("");
  const [dislikethree, setDislikeThree] = useState("");
  return (
    <View>
      <MainCont>
        <LeftSide>
          <Text style={styles.text}>{maintext}</Text>
        </LeftSide>
        <RightSide>
          <OpOne>
          <Input1 placeholder="Type something..." onChangeText={(t)=>{
              alert(t)
              setDislikeOne(dislikeone);
            }}/>
          </OpOne>
          <OpOne>
          <Input1 placeholder="Type something..." onChangeText={(t)=>{
              alert(t)
              setDislikeTwo(disliketwo);
            }}/>
          </OpOne>
          <OpOne>
            <Input1 placeholder="Type something..." onChangeText={(t)=>{
              alert(t)
              setDislikeThree(dislikethree);
            }}/>
          </OpOne>
        </RightSide>
      </MainCont>
    </View>
  );
};

Likes.defaultProps = {
  maintext: "default",
};
export default Likes;
