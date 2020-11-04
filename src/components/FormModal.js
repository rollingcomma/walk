import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Formik } from 'formik';
import AppButton from './AppButton';
import { AppLabel } from './AppText';
import AppTextInput from './AppTextInput';
export default FormModal = ({
  modalVisible
}) => {
  return(
    <Modal 
      visible={modalVisible}
      animationType="slide">
        <AppButton icon="close"/>
        <AppLabel>Send a Message</AppLabel>
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
                <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"baseline"}}>
                  <AppTextInput placeholder="Type a message..." />
                  <AppButton 
                    icon="Cancel"
                    onPress={ handleSubmit }
                    containerStyle={styles.btnContainerStyle}
                    textStyle={styles.btnTextStyle}/>
                </View>
              </>
            );
          }}
        </Formik>
    </Modal>
  )
}