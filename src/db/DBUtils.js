import { firestore } from '../firebase';

export const findUser = async (uid) => {
  return firestore.collection("users").doc(uid).get()
  .then(doc => {
    return doc.data();
  })
  .catch(err => {
    console.log("Error getting user", err);
  });
}

export const createUser = async (newUser) => {
  const user = await findUser(newUser.uid);
  if(!user.exists) {
    return firestore.collection("users").doc(newUser.uid).set(newUser);
  }
  //user? user: firestore.collection("users").doc(newUser.uid).set(newUser);
}

// export const findDogProfile = (uid) => {
//   return firestore.collection("dogPorfiles").doc(uid).get();
// }

// export const createDogProfile = (uid, newDogProfile) => {
//   const dogProfile = await findDogProfile(uid);
//   if(!dogProfile) {
//     return firestore.collection("dogProfiles").doc(uid).set(newDogProfile);
//   }
// }

export const dogProfile = async (uid, newDogProfile) => {
  const dogProfile = await firestore.collection("dogPorfiles").doc(uid).get();
  if(newDogProfile.exists) {
    return dogProfile.exists? dogProfile: await firestore.collection("dogProfiles").doc(uid).set(newDogProfile);
  } else {
    return dogProfile;
  }
}

export const walkerProfile = async (uid, newWalkerProfile) => {
  const walkerProfile = await firestore.collection("walkerProfiles").doc(uid).get();
  if(newWalkerProfile.exists) {
    return walkerProfile.exists? walkerProfile: await firestore.collection("walkerProfiles").doc(uid).set(newWalkerProfile);
  } else {
    return walkerProfile;
  }
}

export const posts = async () => {
  return await firestore.collection("posts").get();
}

export const newPost = async (uid, newPost) => {
  await firestore.collection("posts").doc(uid).set(newPost);
  
}

firestore.collection("dogProfile").add(
  
)

firestore.collection("walker").add(
  {}
)

firestore.collection("posts").add(
  {

  }
)

firestore.collection("events").add(
  {

  }
)

firestore.collection("requests").add(
  {
    
  }
)