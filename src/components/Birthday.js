import React, {useState} from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import CusDateTimePicker from "./CusDateTimePicker";
import CusModal from "./CusModal";


const InputTitle = styled.View`
  /*flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#CBD; */
  font-size:30px;
`;

const TextStyled = styled.Text`
  width:90%;
  justifyContent:center;
  alignItems:center;
`;
const ImgCont = styled.TouchableOpacity`
  width: 15px;
  height: 8px;
  /* background-color:red; */
`;
const Arrow = styled.Image`
  width: 100%;
  height: 100%;
`;
const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 268,
    height: 48,
    
  }, 
  inputContainer: {
    width: 194,
    height: 37,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginStart:40,
    borderWidth:1,
    borderColor:"#DDD",
  },
  text: {
    fontSize: 13,
    fontWeight:"bold"
  },
});

const Birthday = ({ defaultDate, value, text, handleSelected}) => {
const [pickerShow, setPickerShow] = useState(false);
const downarrowimg = require("../../assets/downarrow.png");

  const handleClosePicker = () => {
    setPickerShow(false);
  }
  return (
    <View style={styles.container}>
      {/* <InputCont> */}
        <InputTitle>
          <Text style={styles.text}>{text}</Text>
        </InputTitle>
        {/* <Spacer /> */}
        <View style={styles.inputContainer}>
          <TextStyled>{value} </TextStyled>
          <ImgCont
            onPress={() => {
              setPickerShow(true);
            }}
          >
            <Arrow source={downarrowimg} />
          </ImgCont>
        </View>
      {/* </InputCont> */}
      <CusModal title="Pick your birthday" handleModalClose={handleClosePicker} modalVisible={pickerShow}>
        <CusDateTimePicker defaultDate={defaultDate} handleClosePicker={handleClosePicker} handleSelected={handleSelected}/>
      </CusModal>
            
    </View>
  );
};
export default Birthday;
