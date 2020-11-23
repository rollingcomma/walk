import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Feed, DogProfileResultPage} from "../Pages";
import { useUserState } from "../hook/useUserState";

const Stack = createStackNavigator();

export default FeedNavigator = () => {
  const [userState] = useUserState();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Feed}
        options={{title:"Home"}}
        />
      <Stack.Screen 
        name="DogProfileRequest"
        component={DogProfileResultPage}
        options={{title:"Dog Profile"}}
      />
    </Stack.Navigator>
  )
  
}
