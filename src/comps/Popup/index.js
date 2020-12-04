import React, {useState} from "react";
import styled from "styled-components/native";
import { Formik } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Modal, StyleSheet, onPress } from "react-native";
import colors from '../../styles/colors';
const PopupCont = styled.View`
  width: 324px;
  height: 254px;
  background-color: white;
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

const ImgBox = styled.Button`
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

const nextarrow = require("./nextarrow.png");
const close = require("./close.png");

const Popup = ({
  modalVisible,
  handleModalClose,
  handleMessageChange,
  handleSubmit
}) => {
  return (
   <Modal 
      transparent
      visible={modalVisible}
      animationType="fade">
      <View style={styles.modalContainer}>
      <PopupCont>
        <Exit>
          <FontAwesome.Button
            name="close"
            backgroundColor="transparent"
            size= {20}
            color={colors.secondary}
            onPress={() => handleModalClose()}/>
        </Exit>
        <TextDisplay><Text >Send a Message</Text></TextDisplay>
        
                <>
                <Inputs>
                  <InputsCont>
                    <TextInput>
                      <InputT 
                        placeholder="Type a Message..."
                        onChangeText={(text) => {
                          handleMessageChange(text);
                        }}

                      />
                    </TextInput>
                    <FontAwesome.Button
                      name="chevron-circle-right"
                      size= {30}
                      backgroundColor="transparent"
                      color={colors.primary}
                      onPress={() => {
                        handleSubmit();
                        handleModalClose()} }
                      />
                  </InputsCont>
                </Inputs>
              </>
      </PopupCont>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    paddingHorizontal: 30,
    backgroundColor:'rgba(0,0,0,0.8)',
    justifyContent: "center",
    alignItems:"center"
  }})

Popup.defaultProps = {};

export default Popup;