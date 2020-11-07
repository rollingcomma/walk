import React, { useState } from 'react';
import { Formik } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../styles/colors';
import { 
  StyleSheet, 
  View, 
  Modal } from 'react-native';
import {
  Heading,
  AppTextInput 
} from './index1';
// import AppButton from './AppButton';
// import Heading from './Heading';
// import AppTextInput from './AppLabeledTextInput';

export default FormModal = ({
  modalVisible,
  handleModalClose
}) => {
  return(
    <Modal 
      transparent
      visible={modalVisible}
      animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.formContainer}>
          <View style={styles.closeBtn}>
            <FontAwesome.Button
              name="close"
              backgroundColor="transparent"
              size= {20}
              color={colors.secondary}
              onPress={() => handleModalClose()}/>
          </View>
          <Heading>Send a Message</Heading>
          <Formik  
            initialValues={{
              message:"",
            }}
            onSubmit = {async values => {
              console.log("form submitted");
              // const dogProfile = await dogProfile(user.uid, values);
              // console.log("dog profile created", dogProfile)
            }}>
            {({handleChange, handleBlur, handleReset, handleSubmit, values, touched, errors, isSubmitting}) => {
              return(
                <>
                  <View style={ styles.msgContainer }>
                    <AppTextInput inputStyle={styles.inputStyle} placeholder="Type a message..." />
                    <FontAwesome.Button
                      name="chevron-circle-right"
                      size= {30}
                      backgroundColor="transparent"
                      color={colors.primary}
                      onPress={() => handleModalClose() }
                      />
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    paddingHorizontal: 30,
    backgroundColor:'rgba(0,0,0,0.8)',
    justifyContent: "center",
    alignItems:"center"
  },
  closeBtn: {
    width:"100%",
    alignItems:"flex-end",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  formContainer: {
    width: "90%",
    height:"25%",
    borderRadius: 15,
    backgroundColor: colors.white,
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center"
  },
  msgContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
    flexDirection:"row", 
    justifyContent:"center", 
    alignItems:"baseline",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: colors.secondary,
    minHeight: 40,
    borderRadius: 5,
    width: "80%",
    backgroundColor: colors.white,
    marginRight:15
  },
  requestBtnContainerStyle: {
    margin: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.primary
  },
  btnTextStyle: {
    marginHorizontal:5,
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold"
  }
})