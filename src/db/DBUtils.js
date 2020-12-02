import { 
  usersRef, 
  dogProfilesRef, 
  walkerProfilesRef, 
  eventsRef,
  postsRef,
  requestsRef,
  channelsRef,
  storageRef
} from './DBRefs';
import "react-native-get-random-values";
import {v4 as uuidv4} from 'uuid';
import { batch, firestoreFieldValue, auth, firestore } from './firebase';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { onChange } from 'react-native-reanimated';

/**
 * Description: Log out user
 */
export const logout = () => {
  return auth().signOut()
        .then(() => {
          return true;
        })
        .catch(error => {
          console.log("Logout error", error);
        })
}

/**
 * Description: Sign In with Google and Firebase
 */
export const signInWithGoogle = async () => {
    const config = {
      iosClientId: "855049434388-lg44s04igmic2jh4bl3ud1iq4ne3np4m.apps.googleusercontent.com",
      androidClientId: "855049434388-ab84sv7shltutn0vdm7gdd55qrsf5ml5.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    }
    try {
      const {
        type,
        idToken,
        accessToken
      } = await Google.logInAsync(config);
      
      if(type === 'success') {
        const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);
        await auth().signInWithCredential(credential);
        if (auth().currentUser) {
          return {
            uid: auth().currentUser.uid,
            username: auth().currentUser.displayName,
            email: auth().currentUser.email,
            photoURL:auth().currentUser.photoURL
          }
        //return currentUser;
        }
      } else {
        console.log("login failed");
      }
    } catch ({ message }) {
      console.log(`Google Login Error: ${message}`);
    }
  }

  /**
   * Description: Sign In with Facebook and Firebase
   */
  export const signInWithFacebook = async () => {
    try{
      await Facebook.initializeAsync();
      const {
        type,
        token
      } = await Facebook.logInWithReadPermissionsAsync( {appId: "2719816824957835",
          permissions: ['public_profile'],
        });
      
      if(type === 'success') {
        const credential = auth.FacebookAuthProvider.credential(token);
        //console.log(credential)
        await auth().signInWithCredential(credential);
        if (auth().currentUser) {
          currentUser = {
            uid: auth().currentUser.uid,
            username: auth().currentUser.displayName,
            email: auth().currentUser.email,
            photoURL:auth().currentUser.photoURL
          }
        }
        return currentUser;

      } else {
        console.log("login failed");
      }
    } catch ({ message }) {
      console.log(`Facebook Login Error: ${message}`);
    }
  };

/**
 * description: fetch user by uid
 * 
 * @param { string } uid
 * 
 * @return { user} 
 *          { 
 *            uid: string
 *            username: string
 *            email: string
 *            createdAt: date
 *          }
 */
export const findUser = (uid) => {
  if(!uid) return;

  return usersRef.doc(uid).get()
  .then(doc => {
    if(doc.exists) {
      return doc.data();
    } else{
      console.log("not exist");
    }
  })
  .catch(err => {
    console.log("Error getting user", err);
  });
}

/**
 * 
 * @param {*} dogId 
 */
export const findOwnerByProfileId = (dogId) => {
  if(!dogId) return;
  
  return usersRef.where("profileId", "==", dogId).get()
  .then(data => {
    let owner = [];
    data.forEach(doc => 
      owner.push(doc.data())
    )
    return owner[0];
  })
  .catch(err => {
    console.log("Error getting user", err);
  });
}

/**
 * description: create new user
 * 
 * @param { user } 
 *        { 
 *          uid: string
 *          username: sting
 *          email: string
 *          createdAt: date
 *        }
 * 
 * @return { boolean } true if succeed 
 */
export const createUser =  (newUser) => {
  if(!newUser) return;

  return usersRef.doc(newUser.uid).set(newUser)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error create user", err);
  });
}

/**
 * description: Update user information without overwriting
 * 
 * @param { user} 
 *        { 
 *          key: newValue
 *        }
 * 
 * @return { boolean } true if succeed 
 */
export const updateUser =  (uid, newValue) => {
  if(!uid && !newValue) return;

  return usersRef.doc(uid).update(newValue)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error create user", err);
  });
}

/**
 * description: delete user by uid
 * 
 * @param { string } uid
 * 
 * @return { boolean } true if succeed 
 */
export const deleteUser = (uid) => {
  if(!uid) return;

  return usersRef.doc(uid).delete()
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error delete user", err);
  });
}

/**
 * description: fetch dog profile by owner's uid
 * 
 * @param { string } uid
 * 
 * @return { dogProfile } 
 *          {
 *            owner: string,
 *            name: string,
 *            avatarUrl: string,
 *            age: int,
 *            breed: string,
 *            bio: string,
 *            likes: array,
 *            dislikes: array,
 *            phone: string,
 *            province: string,
 *            city: string,
 *            address: string,
 *            postalCode: string,
 *            createdAt: date,
 *          }
 */
export const getDogProfile = (dogId) => {
  if(!dogId) return;

  return dogProfilesRef.doc(dogId).get()
  .then((doc) => {
    return doc.data();
  })
  .catch(err => {
    console.log("Error get dog profile", err);
  });
}

export const getDogProfileByOwner = (ownerId) => {
  if(!ownerId) return;
  console.log("get dog by owner", ownerId)
  return dogProfilesRef.where("owner", "==", ownerId).get()
  .then(data => {
    let profiles =[];
    data.forEach(doc => {
      profiles.push({id:doc.id, value:doc.data()})
    })
    
    return profiles[0];
  })
  .catch(err => {
    console.log("Error get dog profile", err);
  });
}


/**
 * description: create a dog profile by owner's uid
 * 
 * @param {newDogProfile} 
 *        {
 *          owner: string owner's uid,
 *          name: string,
 *          photoUrl: string,
 *          age: int,
 *          breed: string,
 *          bio: string,
 *          likes: array,
 *          dislikes: array,
 *          phone: string,
 *          province: string,
 *          city: string,
 *          Address: string,
 *          postalCode: string,
 *          createdAt: date,
 *        }
 *  
 * @return { string } profile id if succeed
 */
export const createDogProfile = (newDogProfile) => {
  if(!newDogProfile) return;

  return dogProfilesRef.add(newDogProfile)
  .then((doc) => {
    if(doc.id) {
      return doc.id;
    }
  })
  .catch(err => {
    console.log("Error create or update dog profile", err);
  });
}

/**
 * description: update a dog profile by profile Id
 * 
 * @param {string} profileId
 * 
 * @param {updatedDogProfile}
 *        {
 *          owner: string owner's uid (optional)
 *          name: string, (optional)
 *          photoUrl: string, (optional)
 *          age: int, (optional)
 *          breed: string, (optional)
 *          bio: string, (optional)
 *          likes: array, (optional)
 *          dislikes: array, (optional)
 *          phone: string, (optional)
 *          province: string, (optional)
 *          city: string, (optional)
 *          address: string, (optional)
 *          postalCode: string, (optional)
 *          createdAt: date, (optional)
 *        }
 * key-value pair of dog profile properties that need to update 
 *
 * @return {boolean} true if succeed
 */
export const updateDogProfileByProfileId = (profileId, updateProfile) => {
  if(!profileId || !updateProfile) return;

  return dogProfilesRef.doc(profileId).update(updateProfile)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error create or update dog profile", err);
  });
}

/**
 * description: update a dog profile by profile Id
 * 
 * @param {string} uid 
 * owner's uid
 * @param {updatedDogProfile}
 *        {
 *          owner: string owner's uid (optional)
 *          name: string, (optional)
 *          photoUrl: string, (optional)
 *          age: int, (optional)
 *          breed: string, (optional)
 *          bio: string, (optional)
 *          likes: array, (optional)
 *          dislikes: array, (optional)
 *          phone: string, (optional)
 *          province: string, (optional)
 *          city: string, (optional)
 *          address: string, (optional)
 *          postalCode: string, (optional)
 *          createdAt: date, (optional)
 *        }
 * key-value pair of dog profile properties that need to update 
 *
 * @return {boolean} true if succeed 
 */
export const updateDogProfileByUid = (uid, updateProfile) => {
  if(!uid || !updateProfile) return;

  return dogProfilesRef.where("owner", "==", uid).get()
  .then((data) => {
    return data.forEach(doc => dogProfilesRef.doc(doc.id).update(updateProfile)
    .then(() => {
      return true;
    }))
  })
  .catch(err => {
    console.log("Error create or update dog profile", err);
  });
}

/**
 * description: delete dog profile by profile Id
 * 
 * @param { string } profileId
 * 
 * @return { boolean } true if succeed
 */
export const deleteDogProfile = (profileId) => {
  if(!profileId) return;

  return dogProfilesRef.doc(profileId).delete()
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error delete dog profile", err);
  });
}

/**
 * description: fetch walker's profile by user's uid
 * 
 * @param { string } uid
 * 
 * @return { walkerProfile } if exists
 *          {
 *            uid: string,
 *            name: string,
 *            age: int,
 *            photoUrl: string,
 *            bio: string,
 *            phone: string,
 *            province: string,
 *            country: string,
 *            address: string,
 *            postalCode: string,
 *            birthday: date,
 *            emergencyContactPerson: string,
 *            emergencyContactTel: string,
 *            createdAt: date,
 *          }
 */
export const getWalkerProfile = (uid) => {
  if(!uid) return;

  return walkerProfilesRef.doc(uid).get()
  .then((doc) => {
    if(doc.exists) {
      return doc.data();
    } else{
      console.log("not exist");
    }
  })
  .catch(err => {
    console.log("Error get walker profile", err);
  });
}

/**
 * description: create a walker profile by user's uid
 * 
 * @param { walkerProfile } 
 *        {
  *         uid: string, 
  *         name: string,
  *         age: int,
  *         photoUrl: string,
  *         bio: string,
  *         phone: string,
  *         province: string,
  *         city: string,
  *         address: string,
  *         postalCode: string,
  *         birthday: date,
  *         emergencyContactPerson: string,
  *         emergencyContactTel: string,
  *         createdAt: date,
  *       }
 *  
 * @return { string } id if succeed
 */
export const createWalkerProfile = (walkerProfile) => {
  if(!walkerProfile) return;

  return walkerProfilesRef.doc(walkerProfile.uid).set(walkerProfile)
  .then((doc) => {
    // if(doc.id) {
    //   return doc.id;
    // }
    return true;
  })
  .catch(err => {
    console.log("Error create walker profile", err);
  });
}

/**
 * description: create / update a walker profile by user's uid
 * when updating an existing profile, uid is mandatory, other fields are optional 
 * 
 * @param { string } uid
 * @param { walkerProfile } 
 *        {
  *         uid: string, 
  *         name: string,
  *         age: int,
  *         photoUrl: string,
  *         bio: string,
  *         phone: string,
  *         province: string,
  *         country: string,
  *         address: string,
  *         postalCode: string,
  *         birthday: date,
  *         emergencyContactPerson: string,
  *         emergencyContactTel: string,
  *         createdAt: date,
  *       }
 *  
 * @return { boolean } true if succeed
 */
export const updateWalkerProfile = (profileId, newValue) => {
  if(!profileId && !newValue) return;

  return walkerProfilesRef.doc(profileId).update(newValue)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error create or update walker profile", err);
  });
}

/**
 * description: delete walker profile by user Id
 * 
 * @param { string } uid
 * 
 * @return { boolean } true if succeed
 */
export const deleteWalkerProfile = (uid) => {
  if(!uid) return;

  return walkerProfilesRef.doc(uid).delete()
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error delete walker profile", err);
  });
}

/**
 * description: fetch all posts
 *  
 * @return { array }  [{id:postId, value:post}...] single post format refers to getPost
 */
export const getAllPosts = () => {
  return postsRef.orderBy("createdAt", "desc").get()
  .then(querySnapshot => {
    let posts = [];
    querySnapshot.forEach(doc => 
                            posts.push({
                              id: doc.id,
                              value: doc.data()
                            })
                          )
    return posts;
  })
  .catch(err => {
    console.log("Error get all posts", err);
  });
}

/**
 * description: fetch all new posts created after startTime
 *  
 * @return { array }  [{id:postId, value:post}...] single post format refers to getPost
 */
export const getPostsUpdate = (startTime) => {
  return postsRef.where("createdAt", ">", startTime).orderBy("createdAt", "desc").get()
  .then(querySnapshot => {
    let posts = [];
    querySnapshot.forEach(doc => 
                            posts.push({
                              id: doc.id,
                              value: doc.data()
                            })
                          )
    return posts;
  })
  .catch(err => {
    console.log("Error get all posts", err);
  });
}

/**
 * Description: fetch all posts by dog id
 * @param {string} dogId 
 * 
 * @return {array} [{id:postId, value:post}...]  single post format refers to getPost
 * 
 */
export const getPostsByDogId = (dogId) => {
  if(!dogId) return;

  return postsRef.where("dogId", "==", dogId).get()
  .then(querySnapshot => {
    let posts = [];
    querySnapshot.forEach(doc => 
                            posts.push({
                              id: doc.id,
                              value: doc.data()
                            })
                          )
    return posts;
  })
  .catch(err => {
    console.log("Error get user's  posts", err);
  });
}

/**
 * description: fetch a post by post id
 * 
 * @param { string } postId 
 * 
 * @return { post }
 *          {
 *            dogId: string,
 *            name: string,
 *            avatarUrl: string,
 *            picsUrl: string,
 *            createdAt: date,
 *            likes: array, - list of uid liked the post 
 *           }
 */
export const getPost = (postId) => {
  if(!postId) return;

  return postsRef.doc(postId).get()
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      } 
    })
    .catch(err => {
      console.log("Error to get the post", err);
      return;
    });
}

/**
 * Description: create a new post
 * 
 * @param {post} newPost 
 *        {
 *          dogId: string,
 *          name: string, dog's name
 *          avatarUrl: string, dog profile picture
 *          picsUrl: string, post picture
 *          createdAt: date,
 *          likes: array, list of uid who liked the post
 *         }
 */
export const createPost = (newPost) => {
  if(!newPost) return;
  console.log("new post" , newPost);
  return postsRef.add(newPost) 
  .then(doc => {
    //if(doc.exists) 
      return doc.id;
  })
  .catch(err => {
    console.log("Error create the new post", err);
  });
}

/**
 * description: update a post by post id
 * 
 * @param { string } postId 
 * @param { post } newPost
*         {
*           dogId: string, (optional)
*           name: string, (optional)
*           avatarUrl: string, (optional)
*           picsUrl: string, (optional)
*           likes: array, - list of uid liked the post (optional)
*         }
 */
export const updatePost = (postId, newPost) => {
  if(!postId || !newPost) return;

  return postsRef.doc(postId).update(newPost)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error update the post", err);
  });
}

/**
 * Description: like a post, push uid into likes array field of given post
 * 
 * @param {string} postId 
 * @param {string} uid 
 */
export const likePost = (postId, uid) => {
  if(!postId || !uid) return;

  postsRef.doc(postId).update({likes: firestoreFieldValue.arrayUnion(uid)})
}

/**
 * Description: unlike a post, remove uid from likes array field of given post
 * 
 * @param {string} postId 
 * @param {string} uid 
 */
export const unlikePost = (postId, uid) => {
  if(!postId || !uid) return;

  postsRef.doc(postId).update({likes: firestoreFieldValue.arrayRemove(uid)})
}

/**
 * 
 * @param {request} newRequest 
 *        {
 *          owner: string, 
 *          walker: string,
 *          message: string,
 *          status: string, (value options: active, declined, expired)
 *          createdAt: date
 *        }
 * @return { string } id if operation succeed 
 */
export const createRequest = (newRequest) => {
  if(!newRequest) return;

  return requestsRef.add(newRequest)
  .then(doc => {
    if(doc.exists)
      return doc.id;
  })
  .catch(err => {
    console.log("Error create the new post", err);
  });
}

/**
 * Description: get a request by request Id
 * 
 * @param {string} requestId 
 *
 * @return { boolean } true if succeed otherwise false
 */
export const getRequest = (requestId) => {
  if(!requestId) return;

  return requestsRef.doc(requestId).get()
  .then((doc) => {
    return doc.data();
  })
  .catch(err => {
    console.log("Error get the request", err);
    return false;
  });
}

/**
 * Description: update a request by request Id
 * 
 * @param {string} requestId 
 * @param {request} newRequest 
 *        {
 *          owner: string, (optional)
 *          walker: string, (optional)
 *          message: string, (optional)
 *          status: string, (optional)
 *        }
 * @return { boolean } true if succeed otherwise false
 */
export const updateRequest = (requestId, newRequest) => {
  if(!requestId || !newRequest) return;

  return requestsRef.doc(requestId).update(newRequest)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error update the post", err);
    return false;
  });
}

/**
 * Description: fetch all requests an user received
 * 
 * @param { string } uid 
 * 
 * @return { array } [{id:requestId, value:request}...]
 */
export const getRequestsReceived = (uid) => {
  if(!uid) return;
  console.log("get request", uid);
  return requestsRef.where("owner", "==", uid).orderBy("createdAt", "asc").get()
  .then(querySnapshot => {
    let requests = [];
    querySnapshot.forEach(doc => 
                          requests.push({
                            id: doc.id, 
                            value: doc.data()
                          }))
    return requests;
  })
  .catch(err => {
    console.log("Error get user's received requests", err);
  });
}

/**
 * Description: fetch all requests an user sent
 * 
 * @param { string } uid 
 * 
 * @return { array } [{id:requestId, value:request}...]
 */
export const getRequestsSent = (uid) => {
  if(!uid) return;
  console.log("get request send");
  return requestsRef.where("walker", "==", uid).orderBy("createdAt", "asc").get()
  .then(querySnapshot => {
    let requests = [];
    querySnapshot.forEach(doc => 
                          requests.push({
                            id: doc.id,
                            value: doc.data()
                          }))
    return requests;
  })
  .catch(err => {
    console.log("Error get user's sent requests", err);
  });
}

/**
 * Description: create a new event
 * 
 * @param {event} newEvent 
 *        {
 *          organizer: "string",
 *          name: "string", - location name
 *          address: "string",
 *          city: "string",
 *          postalCode:"string",
 *          startTime": "string",
 *          endTime: "string",
 *          date: "date",
 *          createdAt: "date",
 *          pictureUrl: "string",
 *          status:"string",
 *          details: "string",
 *          participants: "array", - list of uids who is interested
 *        }
 * 
 * @return {string} id - new event id
 * 
 */
export const createEvent = (newEvent) => {
  if(!newEvent) return;
  return eventsRef.add(newEvent)
    .then(doc => {
      if(doc.id)
        return doc.id;
    })
    .catch(err => {
      console.log("Error create a new event", err);
    });
}

/**
 * Description: fetch an event by eventId
 * 
 * @param { string } eventId 
 * 
 * @return { event } event 
 *        {
 *          organizer: "string",
 *          name: "string", - location name
 *          address: "string",
 *          city: "string",
 *          postalCode:"string",
 *          startTime": "string",
 *          endTime: "string",
 *          date: "date",
 *          createdAt: "date",
 *          pictureUrl: "string",
 *          status:"string",
 *          details: "string",
 *          participants: "array", - list of uids who is interested
 *        }
 */
export const getEvent = (eventId) => {
  if(!eventId) return;

  return eventsRef.doc(eventId).get()
    .then(doc => {
      // if(doc.exists) {
        return doc.data();
      // } 
    })
    .catch(err => {
      console.log("Error to get the event", err);
    });
}

/**
 * Description: fetch all events
 * 
 * @return { array } [{id: eventId, value: event}...]
 */
export const getAllEvents = () => {
  return eventsRef.orderBy("createdAt", "desc").get()
  .then(querySnapshot => {
    let events = [];
    querySnapshot.forEach(doc => 
                          events.push({
                            id: doc.id, 
                            value: doc.data()}));
    return events;
  })
  .catch(err => {
    console.log("Error get all events", err);
  });
}


/**
 * Description: fetch new events created after startTime
 * 
 * @return { array } [{id: eventId, value: event}...]
 */
export const getEventsUpdate = (startTime) => {
  if(!startTime) return;
  
  return eventsRef.where("createdAt", ">", startTime ).orderBy("createdAt", "desc").get()
  .then(querySnapshot => {
    let events = [];
    querySnapshot.forEach(doc=>
      events.push({
        id: doc.id, 
        value: doc.data()})
    );
    return events;
  })
  .catch(err => {
    console.log("Error get all events", err);
  });
}

/**
 * 
 * @param { string } eventId 
 * @param { event } updateEvent 
 *        {
 *          organizer: "string", (optional)
 *          name: "string", (optional)
 *          address: "string", (optional)
 *          city: "string", (optional)
 *          postalCode:"string", (optional)
 *          startTime": "string", (optional)
 *          endTime: "string", (optional)
 *          date: "date", (optional)
 *          pictureUrl: "string", (optional)
 *          status:"string", (optional)
 *          details: "string", (optional)
 *          participants: "array",  (optional)
 *        }
 * 
 * @return { boolean } true if succeed otherwise false
 */
export const updateEvent = (eventId, newEvent) => {
  if(!eventId || !newEvent) return;

  return eventsRef.doc(eventId).update(newEvent)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error to update the event", err);
    return false;
  });
}

/**
 * Description: mark interested of an event, push uid into participants array field of given event
 * 
 * @param { string } eventId 
 * @param { string } uid 
 */
export const markEvent = (eventId, uid) => {
  if(!eventId || !uid) return;
  eventsRef.doc(eventId).update({participants: firestoreFieldValue.arrayUnion(uid)})
}

/**
 * Description: unmark interested of an event, remove uid into participants array field of given event
 * 
 * @param { string } eventId 
 * @param { string } uid 
 */
export const unmarkEvent = (eventId, uid) => {
  if(!eventId || !uid) return;
  eventsRef.doc(eventId).update({participants: firestoreFieldValue.arrayRemove(uid)})
}

export  const channelCollectionListener = (setter, channels) => {
  channels.forEach(channel => {
    channelsRef.doc(channel).collection("messages").onSnapshot((snapshot)=>{
        snapshot.docChanges().forEach((change) => {

          if(change.type === "added") {
            setter(items => items.add(change))
          }

          if(change.type === "modified") {
            setter(items => items.map((element)=>{
              if(element.id === change.id) {
                return change
              }
              return element
            }))
          }

          if(change.type === "removed") {
            setter(items => items.filter(element => element.id !== change.id))
          }
        })
      })
    })
  }

/**
 * Description: Create a channel and insert the first message
 * 
 * @param { channel } newChannel 
 *        {
 *          user1: "string", -uid
 *          user1AvatarUrl: "sgring",
 *          user2: "string", -uid
 * *        user2AvatarUrl: "sgring",
 *          createdAt: "date",
 *        }
 * @param { message } firstMessage 
 *        {
 *          sender: "string", -uid
 *          message: "string",
 *          timeStamp: "date",
 *        }
 * @return { string } channelId
 */
export const createChannel = (newChannel, firstMessage) => {
  if(!newChannel || !firstMessage) return;
  
  const chRef = channelsRef.doc();
  batch.set(chRef, newChannel);
  const msgRef = chRef.collection("messages").doc();
  batch.set(msgRef, firstMessage);
  const user1Ref = usersRef.doc(newChannel.user1);
  const user2Ref = usersRef.doc(newChannel.user2);
  batch.update(user1Ref, {"channels": firestoreFieldValue.arrayUnion(chRef.id)});
  batch.update(user2Ref, {"channels": firestoreFieldValue.arrayUnion(chRef.id)});
  return batch.commit()
  .then(() => {
    return chRef.id;
  })
  .catch((err) => {
    console.log("Error", err);
  })
};

/**
 * 
 * @param {*} channelList 
 * @param {*} receiver 
 */
export const findChannelId = async (channelList, dogId) => {
  if(!channelList || !dogId) return;
  const receiver = await findOwnerByProfileId(dogId);
  
  if (receiver && receiver.channels && receiver.channels.length === 0) return {uid:receiver.uid};
  channelList.forEach(
    channel => { 
      if(receiver.channels.includes(channel)) return {channelId:channel, uid:receiver.uid};
    }
  )
  return {uid: receiver.uid};


}
/**
 * Description: insert a message into given channel
 * 
 * @param { string } channelId 
 * @param { message } message 
 *        {
 *          sender: "string", -uid
 *          message: "string",
 *          timeStamp: "date",
 *        }
 * @return { string } messageId if succeed
 */
export const createMessage = (channelId, message) => {
  if(!channelId || !message) return;
  
  return channelsRef.doc(channelId).collection("messages").add(message)
  .then((doc) => {return doc.id})
  .catch(err => {
    console.log("Error create message", err);
  });
};

/**
 * Description: update a message by given channel id and message id
 * 
 * @param { string } channelId 
 * @param { string } messageId 
 * 
 * @return true if succeed
 */
export const updateMessage = (channelId, messageId, newMessage) => {
  if(!channelsId || !messageId || !newMessage) return;

  return channelsRef.doc(channelId).collection("messages").doc(messageId).update(newMessage)
  .then(() => {return true;})
  .catch(err => {
    console.log("Error update message", err);
  })
}

/**
 * Description: fetch messages of a given channel
 * 
 * @param { string } channelId 
 * @param { int } maxMsg (optional) when absent, return all messages in the channel
 * 
 * @return { array } [{id: messageId, message: message}...] - list of message objects, format refers to createMessage
 */
export const getMessagesByChannelId = (channelId, maxMsg) => {
  if (!channelId) return;
  let channel;
  return channelsRef.doc(channelId).get()
  .then(doc => {
    if(doc.exists) {
      channel = doc.data();
      let ref;
      if(maxMsg) {
        ref = channelsRef.doc(channelId).collection("messages").orderBy("createdAt", "asc").limit(maxMsg);
      } else {
        ref = channelsRef.doc(channelId).collection("messages").orderBy("createdAt", "asc");
      }
      return ref.get()
      .then(querySnapshot => {
        let messages = [];
        querySnapshot.forEach(doc => 
                                messages.push({
                                  id: doc.id,
                                  message: doc.data()
                                })
                            )
        
        channel.messages = [...messages];
        return channel;
      })
    } else {
      console.log("no record found");
    }
  })
  .catch(err => {
    console.log("Error to read message", err);
  })
}
/**
 * Description: 
 * 
 * @param { string } uid
 * @param { int } maxMsg (optional)
 * 
 * @return { array } [{id: channelId, channel: [{id: messageId, message: message}...]}...] 
 * single message format refers to createMessage
 */
export const getAllChannelsByUid = (uid, maxMsg) => {
  if(!uid) return;
 
  return usersRef.doc(uid).get()
  .then(async doc => {
    let channels = [];
    const user = doc.data();
    for( const channelId of user.channels) {
      if(channelId) {
        const channel = await getMessagesByChannelId(channelId, maxMsg);
        channel.id = channelId,
        channels.push(channel);
      }
    }
    return channels;
  })
  .catch(err => {
    console.log("Error get all events", err);
  });
}

/**
 * Description: create a review for a given user
 * 
 * @param { string } uid - receiver's uid
 * @param { review } newReview 
 *        {
 *          sender: "string", - sender's uid
 *          stars: "int",
 *          review: "string",
 *          createdAt: "date"
 *        }
 * 
 * @return { string } reviewId if succeed
 */
export const createReview = (uid, newReview) => {
  if(!uid || !newReview) return;

  return usersRef.doc(uid).collection("reviews").add(newReview)
  .then((doc) => {
    if(doc) return doc.id})
  .catch(err => {
    console.log("Error create review", err);
  });
}

/**
 * Description: create a review for a given user
 * 
 * @param { string } uid - receiver's uid
 * @param { review } newReview 
 *        {
 *          sender: "string", (optional)
 *          stars: "int", (optional)
 *          review: "string", (optional)
 *          createdAt: "date" (optional)
 *        }
 * 
 * @return { boolean } true if succeed
 */
export const updateReview = (uid, reviewId, newReview) => {
  if(!uid || !reviewId || !newReview) return;

  return usersRef.doc(uid).collection("reviews").doc(reviewId).update(newReview)
  .then(() => {return true})
  .catch(err => {
    console.log("Error update review", err);
  });
}

/**
 * Description: fetch reviews received by a given uid
 * 
 * @param { string } uid 
 * 
 * @return { array } [{id: reviewId, value: review}] review format refers to createReview
 */
export const getReviewsByUid = (uid) => {
  if (!uid) return;
  return usersRef.doc(uid).collection("reviews").orderBy("createdAt", "asc").get()
  .then(querySnapshot => {
    let reviews = [];
    querySnapshot.forEach(doc => 
                            reviews.push({
                              id: doc.id,
                              value: doc.data()
                            })
                          );
    return reviews;
  })
  .catch(err => {
    console.log("Error to read message", err);
  })
}

export const uploadImageAsync = async (uri, folder) => {
  if(!uri && !folder) return;
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
  const name = uuidv4();
  const ref = storageRef
    .child(`${folder}/${name}`);
  const snapshot = await ref.put(blob);

  // close and release blob
  blob.close();
  const res = {imageUrl:await snapshot.ref.getDownloadURL(), ref:ref}
  return res;
}

export const deleteImage = async(ref) => {
  if(!ref) return;
  ref.delete()
  .then(() => {
    console.log("File is deleted successfully");
    return true;
  })
  .catch((err) =>{
     console.log("Error deleting file", err);
  })
}

