import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default Links = ({ navigation }) => {
  return(
    <View>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")} />
      <Button
        title="Feeds"
        onPress={() => navigation.navigate("Home")} />
      <Button
        title="Dog Profile"
        onPress={() => navigation.navigate("DogProfile")} />
      <Button
        title="Walker Profile"
        onPress={() => navigation.navigate("WalkerProfile")} />
      <Button
        title="Event"
        onPress={() => navigation.navigate("Event")} />
      <Button
        title="Inbox"
        onPress={() => navigation.navigate("Inbox")} />
      <Button
        title="Add a New Event"
        onPress={() => navigation.navigate("EventForm")} />
      <Button
        title="Chat Channel"
        onPress={() => navigation.navigate("ChatChannel")} />
      <Button
        title="Create a Dog Profile"
        onPress={() => navigation.navigate("NewOwner")} />
      <Button
        title="Register a Walker Profile"
        onPress={() => navigation.navigate("NewWalker")} />
      <Button
        title="Write a Review"
        onPress={() => navigation.navigate("ReviewForm")} />
    </View>
  )
}