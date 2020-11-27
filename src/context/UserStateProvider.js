import React, { createContext, useEffect, useState, useReducer } from "react";
import { _storeData, _retrieveData } from "../helpers/storage";
import { users } from "../db/mockDb";

export const UserContext =  createContext(null);
export const DispatchUserContext = createContext(undefined);


export default UserStateProvider =  ({children}) => {
  
  // const [defaultUserState, setDefaultUserState] = useState(null);
  // useEffect(()=>{
  //   async function fetchUser() {
  //     user = await _retrieveData("user");
  //     if(user)
  //       setDefaultUserState(user);
  //   }
  //   fetchUser();
  // }, [])

  const [userState, dispatchUser] = useReducer(
    (userState, newValue) => {
      //if(newValue) _storeData({ ...newValue });
      console.log("dispatch", newValue);
      return { ...userState, ...newValue }
    },
    null
  );

  return (
    <UserContext.Provider value={userState}>
      <DispatchUserContext.Provider value={dispatchUser}>
        {children}
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
}


