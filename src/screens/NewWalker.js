import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Formik } from 'formik';
import Screen from '../components/Screen'; 
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Separator from '../components/Separator';

import { walkerProfile } from "../db/DBUtils";

export default NewWalker = ({user}) => {
  const validate = (values) => {
    
  }
  return(
     <Screen style={styles.container}>
      <Formik 
        initialValues={{
          name:"",
          age:"",
          bio:"",
          email:"",
          phone:"",
          province:"",
          address:"",
          zipCode:"",
          emergencyContactName:"",
          emergencyPhone:""
        }}
        onSubmit = {async values => {
          console.log("form submitted", values);
          const dogProfile = await dogProfile(user.uid, values);
          console.log("dog profile created", dogProfile)
          }}>
        {({handleChange, handleBlur, handleReset, handleSubmit, values, touched, errors, isSubmitting}) => {
          return(
            <>
              <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"baseline"}}>
                <AppButton 
                  title="Cancel"
                  onPress={ handleReset }/>
                <Text style={styles.label}>Edit Profile</Text>
                <AppButton
                  title="Done"
                  onPress={ handleSubmit }/>
              </View>
              <Separator />
              <ScrollView 
                style={styles.scrollView}>
                <View style={{alignItems:"center"}}>
                  <Image style={styles.imageContainerStyle}/>
                  <Text> Change Profile Photo </Text>
                </View>
                <Separator />
                <View>
                  <AppTextInput label="Name" placeholder="Your name"/>
                  <AppTextInput label="Age" placeholder="Your age"/>
                  <AppTextInput label="Bio" multiline={true}/>
                  <Separator />
                  <Text style={styles.label}>Personal Information</Text>
                  <AppTextInput label="Email" placeholder="example@gmail.com"/>
                  <AppTextInput label="Phone" placeholder="###-###-####"/>
                  <AppTextInput label="Birthday"/>
                  <AppTextInput label="Province" placeholder="BC"/>
                  <AppTextInput label="Address" placeholder="1234 A st"/>
                  <AppTextInput label="Zip Code" placeholder="A1A 1A1"/>
                  <Separator />
                  <Text style={styles.label}> Emergency Contact </Text>
                  <AppTextInput label="Name"/>
                  <AppTextInput label="Phone" placeholder="###-###-####"/>
                </View>
              </ScrollView>
            </>
          );
        }}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  
  imageContainerStyle: {
    width: 100, 
    height: 100, 
    borderWidth: 1, 
    borderColor:"lightgray"
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    marginHorizontal: 20
  }

});
