import React, { createContext, useReducer } from "react";
import { users } from "../db/mockDb";

const defaultUserState = users.uid1;
export const UserContext = createContext(defaultUserState)
export const DispatchUserContext = createContext(undefined)

export default UserStateProvider =  ({children}) => {
  console.log("user context");
  const [userState, dispatchUser] = useReducer(
    (userState, newValue) => {
      sessionStorageParser(newValue)
      return { ...userState, ...newValue }
    },
    defaultUserState
  );

  return (
    <UserContext.Provider value={userState}>
      <DispatchUserContext.Provider value={dispatchUser}>
        {children}
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
}


