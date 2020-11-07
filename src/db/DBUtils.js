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
import { firestore, firestoreFieldValue } from './firebase';


/**
 * description: fetch user by uid
 * 
 * @param { string } uid
 * 
 * @returns { user} 
 *          { 
 *            uid: string
 *            username: sting
 *            email: string
 *            createdAt: date
 *          }
 */
export const findUser = (uid) => {
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
 * @returns { boolean } true if succeed otherwise false
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
 * @param { string } uid
 * 
 * @returns { boolean } true if succeed otherwise false
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

/**
 * description: fetch dog profile by owner's uid
 * 
 * @param { string } uid
 * 
 * @returns { dogProfile } 
 *          {
 *            owner: string,
 *            name: string,
 *            photoUrl: string,
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
export const getDogProfile = async (dogId) => {
  return dogProfilesRef.where("id", "==", dogId).get()
  // return dogProfilesRef.doc(dogId).get()
  .then((data) => {
    let result = null;
    data.forEach((doc) => result = {...doc.data()});
    return result; 
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
 * @returns {string / boolean} profile id if succeed otherwise false
 */
export const createDogProfile = async (newDogProfile) => {
  return dogProfilesRef.add(newDogProfile)
  .then((doc) => {
    if(doc.id) {
      updateDogProfileByProfileId(doc.id, {id: doc.id});
      return doc.id;
    }
  })
  .catch(err => {
    console.log("Error create or update dog profile", err);
    return false;
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
 * @returns {boolean} true if succeed otherwise false
 */
export const updateDogProfileByProfileId = (profileId, updateProfile) => {
  return dogProfilesRef.doc(profileId).update(updateProfile)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error create or update dog profile", err);
    return false
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
 * @returns {boolean} true if succeed otherwise false
 */
export const updateDogProfileByUid = (uid, updateProfile) => {
  return dogProfilesRef.where("owner", "==", uid).get()
  .then((data) => {
    return data.forEach(doc => dogProfilesRef.doc(doc.id).update(updateProfile)
    .then(() => {
      return true;
    }))
  })
  .catch(err => {
    console.log("Error create or update dog profile", err);
    return false
  });
}

/**
 * description: delete dog profile by profile Id
 * 
 * @param { string } profileId
 * 
 * @returns { boolean } true if succeed otherwise false
 */
export const deleteDogProfile = (profileId) => {
  return dogProfilesRef.doc(profileId).delete()
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error delete dog profile", err);
    return false;
  });
}

/**
 * description: fetch walker's profile by user's uid
 * 
 * @param { string } uid
 * 
 * @returns { walkerProfile } if exists
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
  return walkerProfilesRef.doc(uid).get()
  .then((doc) => {
    if(doc.exists) {
        return doc.data();
      } else{
        console.log("not exist");
      }
  })
  .catch(err => {
    console.log("Error get dog profile", err);
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
 * @returns { string / boolean } true if succeed otherwise false
 */
export const setWalkerProfile = (walkerProfile) => {
  return walkerProfilesRef.doc(walkerProfile.uid).set(walkerProfile)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error create or update dog profile", err);
    return false;
  });
}

/**
 * description: delete walker profile by user Id
 * 
 * @param { string } uid
 * 
 * @returns { boolean } true if succeed otherwise false
 */
export const deleteWalkerProfile = (uid) => {
  return walkerProfilesRef.doc(uid).delete()
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error delete dog profile", err);
    return false;
  });
}


/**
 * description: fetch all posts
 *  
 * @returns { array } true if succeed otherwise false
 */
export const getAllPosts = () => {
  return postsRef.get()
  .then(querySnapshot => {
    let posts = [];
    querySnapshot.forEach(doc => posts.push(doc.data()))
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
 * @returns {array} posts
 * list of post, format for single post refers to getPost
 */
export const getPostsByDogId = (dogId) => {
  return postsRef.where("dogId", "==", dogId).get()
  .then(querySnapshot => {
    let posts = [];
    querySnapshot.forEach(doc => posts.push(doc.data()))
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
 * @returns { post }
 *          {
 *            dogId: string,
 *            name: string,
 *            avatarUrl: string,
 *            picsUrl: string,
 *            createAt: date,
 *            likes: array, - list of uid liked the post 
 *          }
 */
export const getPost = (postId) => {
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
  return postsRef.add(newPost) 
  .then(doc => {
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
  return postsRef.doc(postId).update(newPost)
  .then(() => {
    return true;
  })
  .catch(err => {
    console.log("Error update the post", err);
  });
}

/**
 * 
 * @param {string} uid 
 * @param {string} postId 
 */
export const likePost = (uid, postId) => {
  postsRef.doc(postId).update({likes: firestoreFieldValue.arrayUnion(uid)})
}

/**
 * 
 * @param {string} uid 
 * @param {string} postId 
 */
export const unlikePost = (uid, postId) => {
  postsRef.doc(postId).update({likes: firestoreFieldValue.arrayRemove(uid)})
}

export const request = (requestId, newRequest) => {
  // if(requestId !== undefined) {
  //   return requestsRef.doc(requestId).update(newRequest)
  //   .then(doc => {
  //     if(doc.exists) {
  //       return doc.data();
  //     }
  //   })
  //   .catch(err => {
  //     console.log("Error update the post", err);
  //   });
  // } else {
  //   return requestsRef.add(newRequest)
  //   .then(doc => {
  //     if(doc.exists) {
  //       return doc.data();
  //     }
  //   })
  //   .catch(err => {
  //     console.log("Error create the new post", err);
  //   });
  // }
}

export const getRequestReceived = (uid) => {
  // return requestsRef.where("receiver", "==", uid).get()
  // .then(querySnapshot => {
  //   if(querySnapshot.length > 0)
  //   return querySnapshot;
  // })
  // .catch(err => {
  //   console.log("Error get user's received requests", err);
  // });
}

export const getRequestSent = (uid) => {
  // return requestsRef.where("sender", "==", uid).get()
  // .then(querySnapshot => {
  //   if(querySnapshot.length > 0)
  //   return querySnapshot;
  // })
  // .catch(err => {
  //   console.log("Error get user's sent requests", err);
  // });
}

export const getAllEvents = () => {
  // return eventsRef.get()
  // .then(querySnapshot => {
  //   if(querySnapshot.length > 0)
  //   return querySnapshot;
  // })
  // .catch(err => {
  //   console.log("Error get all events", err);
  // });
}

export const event = (eventId, newEvent) => {
//   if(eventId !== undefined && newEvent !== undefined ) { // update an existing post
//     return postsRef.doc(eventId).update(newEvent)
//     .then(doc => {
//       if(doc.exists) {
//         return doc.data();
//       } 
//     })
//     .catch(err => {
//       console.log("Error update the post", err);
//       return;
//     });
//   } else if (eventId !== undefined) { // get a event by eventId
//     return postsRef.doc(eventId).get()
//     .then(doc => {
//       if(doc.exists) {
//         return doc.data();
//       } 
//     })
//     .catch(err => {
//       console.log("Error to get the post", err);
//       return;
//     });
//   } else {
//     return postsRef.add(newEvent) // create a new event
//     .then(doc => {
//       if(doc.exists) {
//         return doc.data();
//       }
//     })
//     .catch(err => {
//       console.log("Error create the new post", err);
//     });
//   }
// }

// export const getAllChannelsByUid = (uid) => {
//   return usersRef.where("receiver", "==", uid || "sender", "==", uid).get()
//   .then(querySnapshot => {
//     if(querySnapshot.length > 0)
//     return querySnapshot;
//   })
//   .catch(err => {
//     console.log("Error get all events", err);
//   });
}

export const channel = (channelId) => {
  // if(channelId.exists) {
  //   return 
  // }
}
export const getChannelByUid = (uid) => {
  // return channelsRef.where("receiver", "==", uid || "sender", "==", uid).get()
  // .then(querySnapshot => {
  //   if(querySnapshot.length > 0)
  //   return querySnapshot;
  // })
  // .catch(err => {
  //   console.log("Error get all events", err);
  // });
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