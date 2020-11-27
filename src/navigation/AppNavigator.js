import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { useUserState } from "../hook/useUserState";
import { OwnerNavigator, WalkerNavigator } from "./"
import { SignIn, ContinueAsPage, OwnerEditProfile, WalkerEditProfile } from "../Pages"
const Stack = createStackNavigator();

export default AppNavigator = () => {
  const [userState] = useUserState();
  
  return (
    <Stack.Navigator>{
      userState && userState.type ?
        (
          userState.type =="dog owner" ?
          (<Stack.Screen
            name="Owner"
            component={OwnerNavigator} 
            options={{headerShown: false}}
          />)
        :
          (<Stack.Screen
            name="Walker"
            component={WalkerNavigator} 
            options={{headerShown: false}}
          />)
        )
      :
        (
        //   <Stack.Screen
        //   name="Auth"
        //   component={AuthNavigator}
        // />
          <>
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
        </>
        )
        
        
    }</Stack.Navigator>
  )
}