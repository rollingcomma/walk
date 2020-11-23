import React from 'react';
// import { NavigationContainer, navigationContainer } from "@react-navigation/native";
// import { OwnerNavigator, WalkerNavigator } from "./";
import OwnerNavigator from './OwnerNavigator';
import WalkerNavigator from "./WalkerNavigator";
import { useUserState } from "../hook/useUserState";

export default AppNavigator = () => {
  const [userState] = useUserState();
  return (
    userState.type == "dog owner"?  <OwnerNavigator /> : <WalkerNavigator />
  )
}