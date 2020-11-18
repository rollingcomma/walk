import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
// import { ChatChannel, Inbox, DashboardOwner, DashboardWalker} from "../screens";
import { useUserState } from "../hook/useUserState";
import ChatChannel from "../screens/ChatChannel";
import Inbox from "../screens/Inbox";
import DashboardOwner from "../screens/DashboardOwner";
import DashboardWalker from "../screens/DashboardWalker";
import WalkerDashPage from '../Pages/WalkerDashPage';
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
        name="ChatChannel"
        component={ChatChannel}
        options={{title:"Chat Channel"}}
      />
      {userState.type === "dog owner"?
        <Stack.Screen 
          name="Dashboard"
          component={DashboardOwner}
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
