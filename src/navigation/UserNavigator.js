import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { OwnerNavigator, WalkerNavigator} from "./";
import { useUserState } from "../hook/useUserState";

export default UserNavigator = () => {
  const [userState] = useUserState();
  return (
          userState.type == "dog owner"?  <OwnerNavigator /> : <WalkerNavigator />
        )
}