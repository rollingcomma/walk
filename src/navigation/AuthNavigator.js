import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, ContinueAsPage} from "../Pages";

import NewOwner from "../screens/NewOwner";
import NewWalker from "../screens/NewWalker";


const Stack = createStackNavigator();

export default AuthNavigator = () => {
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
          component={NewOwner}
          options={{title:"create an owner"}}
        />
        <Stack.Screen 
          name="NewWalker"
          component={NewWalker}
          options={{title:"create a walker"}}
        />
      </Stack.Navigator>
  )
}