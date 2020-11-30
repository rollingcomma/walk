import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserState } from "../hook/useUserState";
import { logout } from "../db/DBUtils";

export default function Logout() {
  
  const [, dispatchUser] = useUserState();
  const handleOnPress = async () => {
    if(await logout())
      dispatchUser(null);
    else
      alert("error logout.")

  }

  return(
    <TouchableOpacity
      onPress={() => handleOnPress()}
    >
      <Text>LogOut</Text>
    </TouchableOpacity>
  )
}