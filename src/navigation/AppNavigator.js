import React from 'react';
// import { NavigationContainer, navigationContainer } from "@react-navigation/native";
// import { OwnerNavigator, WalkerNavigator } from "./";
import OwnerNavigator from './OwnerNavigator';
import WalkerNavigator from "./WalkerNavigator"
import {Text} from 'react-native'
import { useUserState } from "../hook/useUserState";

export default AppNavigator = () => {
  const [userState] = useUserState();
  return (
    // <Text>Hello</Text>
    // <OwnerNavigator />
    // <WalkerNavigator />
    userState.type == "dog owner"?  <OwnerNavigator /> : <WalkerNavigator />
  )
}