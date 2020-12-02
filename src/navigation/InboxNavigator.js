import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { 
  Inbox, 
  Chatting,  
  WalkerProfilePage, 
  DogProfilePage, 
  OwnerDashPage, 
  WalkerDashPage, 
  LeaveReviewPage} from "../Pages";
import { useUserState } from "../hook/useUserState";
// import Inbox from "../screens/Inbox"
const Stack = createStackNavigator();

export default InboxNavigator = () => {
  const [userState] = useUserState();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{title: "Inbox"}} />
      <Stack.Screen 
        name="Chatting"
        component={Chatting}
        options={{title: "Bob"}}
      />
      <Stack.Screen 
        name="WalkerProfile"
        component={WalkerProfilePage}
        options={{title:"Walker Profile"}}
      />
      <Stack.Screen 
        name="OwnerProfile"
        component={DogProfilePage}
        options={{title:"Walker Profile"}}
      />
      <Stack.Screen 
        name="LeaveReview"
        component={LeaveReviewPage}
        options={{title:"Leave a Review"}}
      />
      {userState && userState.user.type === "dog owner"?
        <Stack.Screen 
          name="Dashboard"
          component={OwnerDashPage}
          options={{title:"Owner"}}
        />
      :
        <Stack.Screen 
          name="Dashboard"
          component={WalkerDashPage}
          options={{title:"Walker"}}
        />
      }
    </Stack.Navigator>
  )
  
}
