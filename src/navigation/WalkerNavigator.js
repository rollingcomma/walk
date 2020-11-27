import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WalkerProfilePage, EventPage, WalkerEditProfile} from "../Pages";

import Event from "../screens/Event";
import InboxNavigator from "./InboxNavigator";
import FeedNavigator from './FeedNavigator';
import FooterBarWalker from '../comps/FooterBarWalker'

const Tab = createBottomTabNavigator();

export default WalkerNavigator = () => {
  return (
  <Tab.Navigator tabBar={props => <FooterBarWalker {...props} />}>
    <Tab.Screen 
      name="Feed"
      component={FeedNavigator}
      // options={{title:"Posts"}}
    />
    <Tab.Screen 
      name="Event"
      component={EventPage}
      options={{title:"Events"}}
    />
    <Tab.Screen 
      name="Inbox"
      component={InboxNavigator}
      options={{title:"Inbox"}}
    />
    <Tab.Screen 
      name="Profile"
      component={WalkerEditProfile}
      options={{title:"Profile"}}
    />
  </Tab.Navigator>
  )
}
