import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppButton from './src/components/AppButton';
import Screen from "./src/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import UserStateProvider from "./src/context/UserStateProvider";
import { useUserState } from "./src/hook/useUserState";
import { EventPage, WalkerAuthentication, WalkerEditProfile, AddEvent, OwnerEditProfile } from './src/Pages';

export default App= () => {
  console.log("app")
  const [userState] = useUserState();
    return (
    <UserStateProvider>
      <Screen>
        <NavigationContainer>
          {userState? <AppNavigator />: <AuthNavigator /> } 
        </NavigationContainer>
       
      </Screen>
    </UserStateProvider>
    
  );
}
