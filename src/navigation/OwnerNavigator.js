import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { DogProfile, Home, Event} from "../screens";
import DogProfile from "../screens/DogProfile";
import Home from "../screens/Home";
import Event from "../screens/Event";
import ImageUpload from "../components/ImageUpload";
import InboxNavigator from "./InboxNavigator"

const Tab = createBottomTabNavigator();

export default OwnerNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{title:"Posts"}}
      />
      <Tab.Screen 
        name="Event"
        component={Event}
        options={{title:"Events"}}
      />
      <Tab.Screen 
        name="Add"
        component={ImageUpload}
        options={{title:"Create new post"}}
      />
      <Tab.Screen 
        name="Inbox"
        component={InboxNavigator}
        options={{title:"Inbox"}}
      />
      <Tab.Screen 
        name="Profile"
        component={DogProfile}
        options={{title:"Profile"}}
      />
    </Tab.Navigator>
  )
 
}
