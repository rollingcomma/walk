import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { EventPage, AddEvent } from "../Pages";
import { useUserState } from "../hook/useUserState";

const Stack = createStackNavigator();

export default EventNavigator = () => {
  const [userState] = useUserState();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event"
        component={EventPage}
        options={{title:"Event"}}
        />
      <Stack.Screen 
        name="AddEvent"
        component={AddEvent}
        options={{title:"Add a Event"}}
      />
    </Stack.Navigator>
  )
  
}
