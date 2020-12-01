import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { useUserState } from "../hook/useUserState";
import { OwnerNavigator, WalkerNavigator } from "./"
import { SignIn, ContinueAsPage, OwnerEditProfile, WalkerEditProfile, Loading } from "../Pages"
import ChatChannel from '../screens/ChatChannel';

const Stack = createStackNavigator();

export default AppNavigator = () => {
  const [userState] = useUserState();
  //console.log(userState);
  return (
    <Stack.Navigator>

    {
      (userState && userState.user && userState.user.type ?
        (userState.user.type =="dog owner" ?
          
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
          // userState && userState.isLoading?
          // (<Stack.Screen
          //   name="Loading"
          //   component={Loading} 
          //   options={{headerShown: false}}
          // />)
          // :
          <>
              <Stack.Screen
                name="Welcome"
                component={SignIn}
                options={{headerShown: false}} 
              />
              <Stack.Screen 
                name="ContinueAs"
                component={ContinueAsPage}
                options={{headerShown: false}} 
              />
              
            </>
          )
      )
    }
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
    </Stack.Navigator>
  )
}