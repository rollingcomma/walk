import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import DogProfile from './DogProfile';
import ChatChannel from './ChatChannel';
import DashboardOwner from './DashboardOwner';
import DashboardWalker from './DashboardWalker';
import WalkerProfile from './WalkerProfile';
import Event from './Event';
import Inbox from './Inbox';
import NewOwner from './NewOwner';
import NewWalker from './NewWalker';
import ReviewForm from './ReviewForm';
import Home from './Home';
import EventForm from './EventForm';
import Links from './Links';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Links">
        <Stack.Screen
          name="Links"
          component={ Links }
          options={{ title: "test entry" }}>
        </Stack.Screen>
        <Stack.Screen
          name="Login"
          component={ Login }
          options={{ title: "Login" }}>
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ title: "Walk" }}>
        </Stack.Screen>
        <Stack.Screen
          name="DogProfile"
          component={ DogProfile }
          options={{ title: "Dog profile" }}>
        </Stack.Screen>
        <Stack.Screen
          name="Inbox"
          component={ Inbox }
          options={{ title: "Inbox" }}>
        </Stack.Screen>
        <Stack.Screen
          name="WalkerProfile"
          component={ WalkerProfile }
          options={{ title: "Walk Profile" }}>
        </Stack.Screen>
        <Stack.Screen
          name="DashboardOwner"
          component={ DashboardOwner }
          options={{ title: "Dog Owner Dashboard" }}>
        </Stack.Screen>
        <Stack.Screen
          name="DashboardWalker"
          component={ DashboardWalker }
          options={{ title: "Walker Dashboard" }}>
        </Stack.Screen>
        <Stack.Screen
          name="ChatChannel"
          component={ ChatChannel }
          options={{ title: "Chat Room" }}>
        </Stack.Screen>
        <Stack.Screen
          name="Event"
          component={ Event }
          options={{ title: "Coming Events" }}>
        </Stack.Screen>
        <Stack.Screen
          name="EventForm"
          component={ EventForm }
          options={{ title: "Create an event" }}>
        </Stack.Screen>
        <Stack.Screen
          name="NewOwner"
          component={ NewOwner }
          options={{ title: "Add a dog profile" }}>
        </Stack.Screen>
        <Stack.Screen
          name="NewWalker"
          component={ NewWalker }
          options={{ title: "Register as a voluntary dog walker" }}>
        </Stack.Screen>
        <Stack.Screen
          name="ReviewForm"
          component={ ReviewForm }
          options={{ title: "Write a review" }}>
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  );
}