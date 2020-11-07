import React, { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import AppButton from './src/components/AppButton';
import Screen from './src/components/Screen';
import ImageUpload from './src/components/ImageUpload';
import { 
  findUser,
  createUser,
  getDogProfile,
  createDogProfile, 
  updateDogProfileByProfileId,
  updateDogProfileByUid,
  getWalkerProfile,
  setWalkerProfile, 
  createPost,
  getPost,
  getAllPosts,
  getPostsByDogId,
  getPostsByUid,
  post,
  request,
  getRequestReceived,
  getAllEvents,
  event,
  getAllChannelsByUid,
  channel,
  getChannelByUid
} from './src/db/DBUtils';

import {uids, users, dogProfiles, dogIds, walkerProfiles, posts, requests} from "./src/db/mockDb";

const test = {
    uid: uids.uid10,
    name: "Kate Lee",
    age: 26,}

export default App= () => {
  
  // useEffect(() => {
  //   async function testDb( ) {
  //     console.log("app loading");
  //     const result = createDogProfile(dogProfiles.dogProfile8);
  //     console.log(result);
  // }
  //   testDb();
  // }, [])

  async function testDb( ) {
      console.log("app loading");
      const result = await getPost("0fX106u71W5sjxThmPVS");
      console.log(result);
  }
  return (
    <Screen>
      <AppButton title="add data" onPress={async() => await testDb()}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
