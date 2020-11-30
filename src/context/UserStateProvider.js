import React, { createContext, useEffect, useState, useReducer } from "react";
import { _storeData, _retrieveData, _clearData } from "../helpers/storage";
import { users } from "../db/mockDb";

const owner = {
  user:{
    uid:"LZS6t1u5QqeS7onhDHmsnqV4j4p1",
    avatarUrl:"https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile1.jpeg?alt=media&token=2903d149-aad0-4768-b9a0-cda1120a54b3",
    channels:["BP2WUEAlfGTrUsvu4cB1"],
    email:"jimleetester@gmail.com",
    profileId:"eC3Dofgik4VlUIfD28jY",
    type:"dog owner",
    username:"Jim Lee"
  }
}
const walker = {
   uid:"eCx3sm3nJPVO4SEYLpyhIaKXIl33",
    avatarUrl:"https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fwalker2.jpg?alt=media&token=94f35d65-9b84-4e72-a749-2235355f9005",
    channels:["r0IixiwyxTi4qmfPTwzA", "BP2WUEAlfGTrUsvu4cB1"],
    email:"joshtester2222@gmail.com",
    profileId:"eC3Dofgik4VlUIfD28jY",
    type:"walker",
    username:"Josh"
}
const initialUserState = owner;

export const UserContext =  createContext({user:initialUserState});
export const DispatchUserContext = createContext(undefined);


export default UserStateProvider =  ({children}) => {
  
  const [defaultUserState, setDefaultUserState] = useState({user:initialUserState});
  useEffect(()=>{
    async function fetchUser() {
      user = await _retrieveData("user");
      if(user)
        setDefaultUserState(user);
    }
    fetchUser();
  }, [])

  const [userState, dispatchUser] = useReducer(
    (userState, newValue) => {
      if(!newValue){
         _clearData();
         return null;
      } else {
         _storeData({ ...newValue });
         return { ...userState, ...newValue }
      }
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


