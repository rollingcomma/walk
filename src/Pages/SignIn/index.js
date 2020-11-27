
import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import Title from "../../comps/Title";
import GoogleButton from "../../comps/GoogleButton";
import FacebookButton from "../../comps/FacebookButton";
import { signInWithGoogle, signInWithFacebook, findUser, createUser} from "../../db/DBUtils";
import { useUserState } from "../../hook/useUserState"
import { usersRef } from "../../db/DBRefs";

const SignIn = ({navigation}) => {
  const [ userState, dispatchUser] = useUserState();
 
  const handleDirectUser = async (currentUser) => {
    console.log("direct user")
    const user =  await findUser(currentUser.uid);
    console.log("find user", user)
    if( user && user.type ) {
      dispatchUser(user);
      console.log("userState",userState);
      return; 
    }
    if(!user) {
      const newUser = {
        ...currentUser,
        createdAt: new Date()
      }
      if(await createUser(newUser)) user = newUser;
    }
    if(user && !user.type){
      dispatchUser(user);
      navigation.navigate("ContinueAs");
    }
  };

  const handleGoogleSignIn = async () => {
    const currentUser = await signInWithGoogle();

    if(currentUser)
      await handleDirectUser(currentUser);
  };

  const handleFacebookSignIn = async () => {
    const currentUser = await signInWithFacebook();
    if(currentUser)
    await handleDirectUser(currentUser);
  };

  return (
    <View style={styles.background}>
      <View style={styles.signinCont}>
        <Title />
        <View style={styles.buttonCont}>
          <GoogleButton style={styles.GoogleButton} onPress={handleGoogleSignIn}/>
          <Text>or</Text>
          <FacebookButton onPress={handleFacebookSignIn}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height:"100%",
    backgroundColor:"#F5FEFE"
  },
  signinCont: {
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
    top:130,
  },
  buttonCont: {
    justifyContent:"space-between",
    alignItems:"center",
    height:200,
    top: 130
  },
  GoogleButton: {
    marginBottom: 100
  }
});

export default SignIn;