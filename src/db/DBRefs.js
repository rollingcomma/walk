import { firestore } from './firebase';
import { storage } from './firebase';

export const usersRef = firestore.collection("users");
export const postsRef = firestore.collection("users");
export const dogProfilesRef = firestore.collection("dogProfiles");
export const walkerProfilesRef = firestore.collection("walkerProfiles");
export const requestsRef = firestore.collection("requests");
export const eventsRef = firestore.collection("events");
export const channelsRef = firestore.collection("channels");
export const messagesRef = firestore.collection("messages");
export const reviewsRef = firestore.collection("reviews");

export const storageRef = storage.ref();
export const postImgsRef = storage.ref();
