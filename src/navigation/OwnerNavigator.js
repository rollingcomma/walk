import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageUpload from "../components/ImageUpload";
import Logout from "../components/Logout";
import { DogProfilePage, OwnerEditProfile} from "../Pages";

import InboxNavigator from "./InboxNavigator"
import FeedNavigator from './FeedNavigator';
import EventNavigator from './EventNavigator';
import FooterBarOwner from '../comps/FooterBarOwner'

const Tab = createBottomTabNavigator();

export default function OwnerNavigator() {
  
  return(
    <Tab.Navigator tabBar={props => <FooterBarOwner {...props} />}>
      <Tab.Screen 
        name="Home"
        component={FeedNavigator}
        // options={{title:"Home"}}
      />
      <Tab.Screen 
        name="Event"
        component={EventNavigator}
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
        component={DogProfilePage}
        options={
          {title:"Profile",
          headerRight: () => <Logout />
        }}
      />
      <Tab.Screen 
      name="EditProfile"
      component={OwnerEditProfile}
      options={{headerShown: false}} 
    />
    </Tab.Navigator>
  )
 
}
