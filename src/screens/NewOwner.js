import React from 'react';
import { StyleSheet,  View, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppMultiTextInput from '../components/AppMultiTextInput';
import AppButton from '../components/AppButton';
import Separator from '../components/Separator';
import AppText from '../components/AppText';
import Heading from '../components/Heading';
import colors from '../components/colors';
import { dogProfile } from "../db/DBUtils";

export default NewOwner = ({user}) => {
  
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
                <Heading>Edit Dog Profile</Heading>
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
                  <AppText> Change Profile Photo </AppText>
                </View>
                <Separator />
                <View>
                  <AppTextInput inputStyle={styles.textInput} label="Name" placeHolder="Name"/>
                  <AppTextInput inputStyle={styles.textInput} label="Age"/>
                  <AppTextInput inputStyle={styles.textInput} label="Breed"/>
                  <Separator />
                  <Heading>Dog Information</Heading>
                  <AppTextInput inputStyle={styles.textInput} label="Bio" multiline={true}/>
                  <AppMultiTextInput label="Likes"/>
                  <AppMultiTextInput label="Dislikes"/>
                  <Separator />
                  <Heading> Personal Information </Heading>
                  <AppTextInput inputStyle={styles.textInput} label="Email"/>
                  <AppTextInput inputStyle={styles.textInput} label="Phone"/>
                  <AppTextInput inputStyle={styles.textInput} label="Province"/>
                  <AppTextInput inputStyle={styles.textInput} label="Address"/>
                  <AppTextInput inputStyle={styles.textInput} label="Zip Code"/>
                </View>
                <Separator />
                <View>
                <Heading>Posts</Heading>
                <AppText>Show people what you've been up to!</AppText>
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
    borderColor: colors.secondary
  },
  scrollView: {
    marginHorizontal: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.secondary,
    margin: 15,
    minHeight: 40,
    width: "70%",
    padding: 10,
    backgroundColor: colors.white
  },
  btnContainerStyle: {
    margin: 10,
    paddingVertical: 10,
    borderRadius: 5
  },
  btnTextStyle: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold"
  }
});
