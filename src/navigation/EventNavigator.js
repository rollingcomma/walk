import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { EventPage, AddEvent } from "../Pages";
import { useUserState } from "../hook/useUserState";
import { View, StyleSheet } from "react-native"
import AddButton from "../comps/WButton/AddButton"

const Stack = createStackNavigator();

export default EventNavigator = ({navigation}) => {
  const [userState] = useUserState();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event"
        component={EventPage}
        options={{
          title:"Event",
          headerRight: () => (userState && userState.type == "dog owner"? 
                          <View style={styles.container}>
                            <AddButton onPress={()=>navigation.navigate("AddEvent")} /> 
                          </View>
                          :
                          null)
         }}
        />
      <Stack.Screen 
        name="AddEvent"
        component={AddEvent}
        options={{title:"Add a Event"}}
      />
    </Stack.Navigator>
  )
  
}
const styles = StyleSheet.create({
  container: {
    width: 40,
    alignItems:"center",
    justifyContent:"center",
  },
}
  
)
