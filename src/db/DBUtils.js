import { firestore } from '../firebase';

export const findUser = (uid) => {
  return firestore.collection("users").doc(uid).get();
}

export const createUser = async (user) => {
  const user = await findUser(user.uid);
  if(!user.exists) {
    return firestore.collection("users").doc(user.uid).set(user);
  }
}

firestore.collection("dogProfile").add(
  {}
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