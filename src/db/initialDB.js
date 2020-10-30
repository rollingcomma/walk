import { useIdentifyRef } from 'react-firebase-hooks/auth/dist/util';
import { firestore } from '../firebase';

const usersRef = firestore.collection('users');

await usersRef.doc('').set(
  {
    username: "Sherlyn",
    email: "rollingcomma@gmail.com",
    type: 1
  }
)

await usersRef.doc('').set(
  {
    username: "Sherlyn",
    email: "rollingcomma@gmail.com",
    type: 2
  }
)

const dogProfilesRef = firestore.collection('dogProfiles');

await dogProfilesRef.add(
  {
    owner: uid,
    name: "Milly",
    age: 6,
    breed: "Border Collie",
    bio: "testing purpose description",
    likes: ["Swimming", "Playing Catch", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"778-999-9999",
    province: "BC",
    Address: "1234, 123A ave Burnaby",
    postalCode: "M1M 9Q9"
  }
)
