import React, { useEffect, useState } from 'react';
import Screen from "./src/components/Screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import UserStateProvider from "./src/context/UserStateProvider";
import { useUserState } from "./src/hook/useUserState";

export default App= () => {
  console.log("app")
  //const [userState] = useUserState();
    return (
    <UserStateProvider>
      <Screen>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer> 
      </Screen>
    </UserStateProvider>
    
  );
}
