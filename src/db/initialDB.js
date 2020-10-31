import { useIdentifyRef } from 'react-firebase-hooks/auth/dist/util';
import { firestore } from '../firebase';
import { user, dogProfile, walkerProfile} from './DBUtils';
const usersRef = firestore.collection('users');

await usersRef.doc('').set(
  {
    username: "Sherlyn",
    email: "rollingcomma@gmail.com",
    createdAt: new Date(),
  }
)

await usersRef.doc('').set(
  {
    username: "Ethan",
    email: "rollingcomma@gmail.com",
    createdAt: new Date(),
  }
)

const newDogProfile1 = 
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
    postalCode: "M1M 9Q9",
    createdAt: new Date(),
  };


const newDogProfile2 = 
  {
    owner: uid,
    name: "Mole",
    age: 3,
    breed: "Border Collie",
    bio: "testing purpose description",
    likes: ["Swimming", "Playing Catch", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"778-999-9999",
    province: "BC",
    Address: "1234, 123A ave Burnaby",
    postalCode: "M1M 9Q9",
    createdAt: new Date(),
  }


const walkerProfileRef = firestore.collection("walkerProfiles");

const newWalkerProfile1 = 
  {
    walker: uid,
    name: "Ethan P.",
    age: 24,
    bio: "Hi there! My name is Ethan and I love all animals. Dogs, cates, birds, you name it. I really love...",
    phone: "778-999-9999",
    province: "BC",
    country: "CA",
    Address: "1234, 123A ave Burnaby",
    postalCode: "M1M 9Q9",
    birthday: "03-01-1996",
    emergencyContactPerson: "Bob Ross",
    emergencyContactTel: "604-123-4567",
    createdAt: new Date(),
  }


const postsRef = firestore.collection("posts");

await postsRef.add(
  {
    dogProfileId:dogProfileID,
    pictures:["", "", ""],
  }
)
await postsRef.add(
  {
    dogProfileId: dogProfileID,
    pictures:["", "", ""],
    liked:[],
    messageChannel:[],
  }
)

const requestRef = firestore.collection("requests");

await requestRef.add(
  {
    owner: dogProfileId,
    walker: walerProfileId,
    message:"Cute pup! I want to walk him/her!",
    timeStamp: new Date(),
    status:"active"
  }
)

const chatChannelsRef = firestore.collection("channels");
await chatChannelsRef.add(
  {
    sender: uid,
    receiver: uid,
    message: "testing",
    timeStamp: new Date(),
  }
)

const eventsRef = firestore.collection("events");
await eventsRef.add(
  {
    organizer: uid,
    address: "21801 Allard Crescent",
    city: "Langley",
    startTime: "1:00pm",
    endTime: "3:00pm",
    date: new Date("November 10, 2020"),
    timeStamp: new Date(),
    picture: "pic.jpg"
  }
)
