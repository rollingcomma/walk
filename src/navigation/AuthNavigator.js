import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, ContinueAsPage, OwnerEditProfile, WalkerEditProfile} from "../Pages";
import AppNavigator from './AppNavigator';
import { useUserState } from "../hook/useUserState"
const Stack = createStackNavigator();

export default AuthNavigator = () => {
  //const [userState] = useUserState();
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={SignIn}
          options={{headerShown: false}} />
        <Stack.Screen 
          name="ContinueAs"
          component={ContinueAsPage}
          options={{title:"continue as"}}
        />
        <Stack.Screen 
          name="NewOwner"
          component={OwnerEditProfile}
          options={{title:"create an owner"}}
        />
        <Stack.Screen 
          name="NewWalker"
          component={WalkerEditProfile}
          options={{title:"create a walker"}}
        />
        {/* {userState && */}
         {/* <Stack.Screen 
          name="App"
          component={AppNavigator}
        /> */}
        {/* } */}
      </Stack.Navigator>
  )
}
