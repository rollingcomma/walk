import { 
  usersRef, 
  dogProfilesRef, 
  walkerProfilesRef, 
  eventsRef,
  postsRef,
  requestsRef,
  channelsRef
} from './DBRefs';

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

export const createUser =  async (uid, newUser) => {
  if(newUser !== undefined) {
    console.log(newUser);
    return usersRef.doc(newUser.uid).set(newUser)
    .then(doc => {
      if(doc) {
        return doc.data();
      }
    })
    .catch(err => {
      console.log("Error create or update user", err);
    });
  } else {
    return await findUser(uid);
  }
}


export const dogProfile = (uid, newDogProfile) => {
  if(newDogProfile !== undefined) { //create or update dog profile
    return dogProfilesRef.doc(uid).set(newDogProfile)
    .then(doc => {
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
// firestore.collection("dogProfile").add(
  
// )

// firestore.collection("walker").add(
//   {}
// )

// firestore.collection("posts").add(
//   {

//   }
// )

// firestore.collection("events").add(
//   {

//   }
// )

// firestore.collection("requests").add(
//   {
    
//   }
// )