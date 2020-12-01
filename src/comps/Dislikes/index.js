import React, {useEffect, useState} from "react";
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
`

const styles = StyleSheet.create({ 
  text: {
    fontWeight:"bold",
    fontSize:13,
    marginTop:5
  },
});


const Dislikes = ({ maintext, dislikes, handleDislikes}) => {
  const [dislikeone, setDislikeOne] = useState("");
  const [disliketwo, setDislikeTwo] = useState("");
  const [dislikethree, setDislikeThree] =useState("");
  
  useEffect(()=>{
    if(dislikes && dislikes.length > 0 ) {
      setDislikeOne(dislikes[0] || "");
      setDislikeTwo(dislikes[1] || "");
      setDislikeThree(dislikes[2] || "");
  }
  },[]);

  useEffect(()=>{
    handleDislikes([dislikeone, disliketwo, dislikethree]);
  },[dislikeone, disliketwo, dislikethree]);

  return (
    <View>
      <MainCont>
        <LeftSide>
          <Text style={styles.text}>{maintext}</Text>
        </LeftSide>
        <RightSide>
          <OpOne>
          <Input1 
            placeholder="Type something..." 
            value={dislikeone}
            onChangeText={(text)=>{
              setDislikeOne(text);
            }}/>
          </OpOne>
          <OpOne>
          <Input1 
            placeholder="Type something..."
            value={disliketwo}
            onChangeText={(text)=>{
              setDislikeTwo(text);
            }}/>
          </OpOne>
          <OpOne>
            <Input1 
              placeholder="Type something..." 
              value={dislikethree}
              onChangeText={(t)=>{
                setDislikeThree(t);
            }}/>
          </OpOne>
        </RightSide>
      </MainCont>
    </View>
  );
};

Dislikes.defaultProps = {
  maintext: "default",
};
export default Dislikes;
