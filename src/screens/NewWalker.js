import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Formik } from 'formik';
import Screen from '../components/Screen'; 
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Separator from '../components/Separator';
import Heading from '../components/Heading';
import AppText from '../components/AppText';
import { walkerProfile } from "../db/DBUtils";
import colors from "../components/colors";
export default NewWalker = ({user}) => {
  
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
          const walkerProfile = await walkerProfile(user.uid, values);
          console.log("walker profile created", walkerProfile)
          }}>
        {({handleChange, handleBlur, handleReset, handleSubmit, values, touched, errors, isSubmitting}) => {
          return(
            <>
              <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"baseline"}}>
                <AppButton 
                  title="Cancel"
                  onPress={ handleReset }/>
                <Heading>Edit Profile</Heading>
                <AppButton
                  title="Done"
                  onPress={ handleSubmit }/>
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
                  <AppTextInput inputStyle={styles.textInput} label="Name" placeholder="Your name"/>
                  <AppTextInput label="Age" placeholder="Your age"/>
                  <AppTextInput label="Bio" multiline={true}/>
                  <Separator />
                  <Heading >Personal Information</Heading>
                  <AppTextInput inputStyle={styles.textInput} label="Email" placeholder="example@gmail.com"/>
                  <AppTextInput inputStyle={styles.textInput} label="Phone" placeholder="###-###-####"/>
                  <AppTextInput inputStyle={styles.textInput} label="Birthday"/>
                  <AppTextInput inputStyle={styles.textInput} label="Province" placeholder="BC"/>
                  <AppTextInput inputStyle={styles.textInput} label="Address" placeholder="1234 A st"/>
                  <AppTextInput inputStyle={styles.textInput} label="Zip Code" placeholder="A1A 1A1"/>
                  <Separator />
                  <Heading headingStyle={styles.emgHeading}> Emergency Contact </Heading>
                  <AppTextInput inputStyle={styles.textInput} label="Name"/>
                  <AppTextInput inputStyle={styles.textInput} label="Phone" placeholder="###-###-####"/>
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
    borderColor: colors.primary
  },
  emgHeading: {
    fontWeight: "bold",
    color: colors.primary
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

});
