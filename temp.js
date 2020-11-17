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

// async function testDb( ) {
  //     console.log("app loading");
  //     const result = await getReviewsByUid(uids.uid9);
  //     console.log(result);
  // }