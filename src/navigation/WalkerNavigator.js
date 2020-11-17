import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { WalkerProfile, Home, Event} from "../screens";
import WalkerProfile from "../screens/WalkerProfile";
import Home from "../screens/Home";
import Event from "../screens/Event";
import InboxNavigator from "./InboxNavigator";

const Tab = createBottomTabNavigator();

export default WalkerNavigator = () => {
  return (
  <Tab.Navigator>
    <Tab.Screen 
      name="Feed"
      component={Home}
      options={{title:"Posts"}}
    />
    <Tab.Screen 
      name="Event"
      component={Event}
      options={{title:"Events"}}
    />
    <Tab.Screen 
      name="Inbox"
      component={InboxNavigator}
      options={{title:"Inbox"}}
    />
    <Tab.Screen 
      name="Profile"
      component={WalkerProfile}
      options={{title:"Profile"}}
    />
  </Tab.Navigator>
  )
}
