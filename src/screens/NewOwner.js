import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppMultiTextInput from '../components/AppMultiTextInput';
import AppButton from '../components/AppButton';
import Separator from '../components/Separator';
import { dogProfile } from "../db/DBUtils";

export default NewOwner = ({user}) => {
  const validate = (values) => {
    
  }
  return(
     <Screen>
      <Formik 
        initialValues={{
          name:"",
          age:"",
          breed:"",
          bio:"",
          likes:["","",""],
          dislikes:["","",""],
          email:"",
          phone:"",
          province:"",
          address:"",
          zipCode:""
        }}
        onSubmit = {async values => {
          console.log("form submitted", values);
          const dogProfile = await dogProfile(user.uid, values);
          console.log("dog profile created", dogProfile);
          }}>
        {({handleChange, handleBlur, handleReset, handleSubmit, values, touched, errors, isSubmitting}) => {
          return(
            <>
              <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"baseline"}}>
                <AppButton 
                  title="Cancel"
                  onPress={ handleReset }
                  containerStyle={styles.btnContainerStyle}
                  textStyle={styles.btnTextStyle}/>
                <Text style={styles.label}>Edit Dog Profile</Text>
                <AppButton
                  title="Done"
                  onPress={ handleSubmit }
                  containerStyle={styles.btnContainerStyle}
                  textStyle={styles.btnTextStyle}/>
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
                  <AppTextInput label="Name" placeHolder="Name"/>
                  <AppTextInput label="Age"/>
                  <AppTextInput label="Breed"/>
                  <Separator />
                  <Text style={styles.label}>Dog Information</Text>
                  <AppTextInput label="Bio" multiline={true}/>
                  <AppMultiTextInput label="Likes"/>
                  <AppMultiTextInput label="Dislikes"/>
                  <Separator />
                  <Text style={styles.label}> Personal Information </Text>
                  <AppTextInput label="Email"/>
                  <AppTextInput label="Phone"/>
                  <AppTextInput label="Province"/>
                  <AppTextInput label="Address"/>
                  <AppTextInput label="Zip Code"/>
                </View>
                <Separator />
                <View>
                <Text>Posts</Text>
                <Text>Show people what you've been up to!</Text>
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
  },
  btnContainerStyle: {
    margin: 10,
    paddingVertical: 10,
    borderRadius: 5
    
  },
  btnTextStyle: {
    textAlign: "center",
    color: "lightblue",
    fontSize: 16,
    fontWeight: "bold"
  }
});
