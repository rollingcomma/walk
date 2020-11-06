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

/**
 * description: fetch user by uid
 * 
 * @param {uid: string}
 * @returns { uid: string
 *            username: sting
 *            email: string
 *            photoURL: string
 *            createdAt: date
 *           }
 */
export const findUser = async (uid) => {
  return usersRef.doc(uid).get()
  .then(doc => {
      if(doc.exists) {
        console.log("exist");
        return doc.data();
      } else{
        console.log("not exist")
      }
    }
   )
  .catch(err => {
    console.log("Error getting user", err);
  });
}

/**
 * description: create new user
 * 
 * @param { uid: string
 *          username: sting
 *          email: string
 *          photoURL: string
 *          createdAt: date
 *         }
 * @returns true if succeed otherwise false
 */
export const createUser =  (newUser) => {
  return usersRef.doc(newUser.uid).set(newUser)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error create user", err);
    return false;
  });
}

/**
 * description: delete user by uid
 * 
 * @param {uid: string}
 * @returns true if succeed otherwise false
 */
export const deleteUser = (uid) => {
  return usersRef.doc(uid).delete()
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error delete user", err);
    return false;
  });
}

export const createDogProfile = (newDogProfile) => {
  if(newDogProfile !== undefined) { //create or update dog profile
    return dogProfilesRef.doc(newDogProfile.uid).set(newDogProfile)
    .then(() => {
      return true;
    })
    .catch(err => {
      console.log("Error create or update dog profile", err);
      return false;
    });
  } else {
    return dogProfilesRef.doc(uid).get()
    .then(doc => {
      if(doc) {
        return doc.data()
      }
    })
    .catch(err => {
      console.log("Error get dog profile", err);
    });
  }
}

export const dogProfile = (uid, newDogProfile) => {
  console.log("add dog profile")
  if(newDogProfile !== undefined) { //create or update dog profile
    return dogProfilesRef.doc(uid).set(newDogProfile)
    .then(doc => {
      console.log(doc);
      if(doc) {
        
        return doc.data()
      }
    })
    .catch(err => {
      console.log("Error create or update dog profile", err);
    });
  } else { 
    return dogProfilesRef.doc(uid).get()
    .then(doc => {
      if(doc) {
        return doc.data()
      }
    })
    .catch(err => {
      console.log("Error get dog profile", err);
    });
  }
}

export const walkerProfile = (uid, newWalkerProfile) => {
  if(newWalkerProfile !== undefined) {
    return walkerProfilesRef.doc(uid).set(newWalkerProfile)
    .then(doc => {
      if(doc) {
        return doc.data()
      }
    })
    .catch(err => {
      console.log("Error create or update walker profile", err);
    });
  } else {
    return walkerProfilesRef.doc(uid).get()
    .then(doc => {
      if(doc) {
        return doc.data()
      }
    })
    .catch(err => {
      console.log("Error get walker profile", err);
    });
  }
}

export const getAllPosts = () => {
  return postsRef.get()
  .then(querySnapshot => {
    if(querySnapshot.length > 0)
    return querySnapshot;
  })
  .catch(err => {
    console.log("Error get all posts", err);
  });
}

export const getPostsByUid = (uid) => {
  return postsRef.where("uid", "==", uid).get()
  .then(querySnapshot => {
    if(querySnapshot.length > 0)
    return querySnapshot;
  })
  .catch(err => {
    console.log("Error get user's  posts", err);
  });
}

export const post = (postId, newPost) => {
  if(postId !== undefined && newPost !== undefined ) { // update an existing post
    return postsRef.doc(postId).update(newPost)
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      } 
    })
    .catch(err => {
      console.log("Error update the post", err);
      return;
    });
  } else if (postId !== undefined) { // get a post by postId
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
  } else {
    return postsRef.add(newPost) // create a new post
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error create the new post", err);
    });
  }
}

export const request = (requestId, newRequest) => {
  if(requestId !== undefined) {
    return requestsRef.doc(requestId).update(newRequest)
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error update the post", err);
    });
  } else {
    return requestsRef.add(newRequest)
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error create the new post", err);
    });
  }
}

export const getRequestReceived = (uid) => {
  return requestsRef.where("receiver", "==", uid).get()
  .then(querySnapshot => {
    if(querySnapshot.length > 0)
    return querySnapshot;
  })
  .catch(err => {
    console.log("Error get user's received requests", err);
  });
}

export const getRequestSent = (uid) => {
  return requestsRef.where("sender", "==", uid).get()
  .then(querySnapshot => {
    if(querySnapshot.length > 0)
    return querySnapshot;
  })
  .catch(err => {
    console.log("Error get user's sent requests", err);
  });
}

export const getAllEvents = () => {
  return eventsRef.get()
  .then(querySnapshot => {
    if(querySnapshot.length > 0)
    return querySnapshot;
  })
  .catch(err => {
    console.log("Error get all events", err);
  });
}

export const event = (eventId, newEvent) => {
  if(eventId !== undefined && newEvent !== undefined ) { // update an existing post
    return postsRef.doc(eventId).update(newEvent)
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      } 
    })
    .catch(err => {
      console.log("Error update the post", err);
      return;
    });
  } else if (eventId !== undefined) { // get a event by eventId
    return postsRef.doc(eventId).get()
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      } 
    })
    .catch(err => {
      console.log("Error to get the post", err);
      return;
    });
  } else {
    return postsRef.add(newEvent) // create a new event
    .then(doc => {
      if(doc.exists) {
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error create the new post", err);
    });
  }
}

export const getAllChannelsByUid = (uid) => {
  return usersRef.where("receiver", "==", uid || "sender", "==", uid).get()
  .then(querySnapshot => {
    if(querySnapshot.length > 0)
    return querySnapshot;
  })
  .catch(err => {
    console.log("Error get all events", err);
  });
}

export const channel = (channelId) => {
  if(channelId.exists) {
    return 
  }
}
export const getChannelByUid = (uid) => {
  return channelsRef.where("receiver", "==", uid || "sender", "==", uid).get()
  .then(querySnapshot => {
    if(querySnapshot.length > 0)
    return querySnapshot;
  })
  .catch(err => {
    console.log("Error get all events", err);
  });
}

export const uploadImageAsync = async (uri) => {
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
    .child(`postImages/${name}`);
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}