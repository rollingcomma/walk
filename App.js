import React, { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import AppButton from './src/components/AppButton';
import Screen from './src/components/Screen';
import Login from './src/screens/Login';
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
  likePost,
  unlikePost,
  createRequest,
  updateRequest,
  getRequestsReceived,
  getRequestsSent,
  getAllEvents,
  createEvent,
  getEvent,
  updateEvent,
  markEvent,
  unmarkEvent,
  createChannel,
  getAllChannelsByUid,
  createMessage,
  getMessagesByChannelId,
  createReview,
  updateReview,
  getReviewsByUid
} from './src/db/DBUtils';

import {
  uids, 
  users, 
  dogProfiles, 
  dogIds, 
  walkerProfiles, 
  posts, 
  requests, 
  events,
  channels,
  messages,
  reviews} from "./src/db/mockDb";


export default App= () => {
  
  async function testDb( ) {
      console.log("app loading");
      const result = await getReviewsByUid(uids.uid9);
      console.log(result);
  }
  //getAllMessagesByChannelId("yHaVVNT7ItVrypOdE31V")
  return (
    <Screen>
      <AppButton title="add data" onPress={async() => await testDb()}/>
      {/* <Login /> */}
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
